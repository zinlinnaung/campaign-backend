import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerRecordDto, UpdateCustomerRecordDto } from './dto';
import * as XLSX from 'xlsx';

@Injectable()
export class CustomerRecordService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCustomerRecordDto) {
    try {
      const codeID = await this.prisma.code.findUnique({
        where: { code: dto.code },
      });

      if (!codeID || codeID.used) {
        throw new ConflictException('Invalid or already used code');
      }

      const result = await this.prisma.$transaction(async (tx) => {
        await tx.code.update({
          where: { id: codeID.id },
          data: { used: true },
        });

        const record = await tx.customerRecord.create({
          data: {
            name: dto.name,
            phone: dto.phone,
            codeId: codeID.id,
            outletName: dto.outletName,
          },
        });

        return record;
      });

      return result;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Phone number already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.customerRecord.findMany({
      include: {
        code: true,
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prisma.customerRecord.findUnique({
      where: { id },
      include: { code: true },
    });

    if (!record) {
      throw new NotFoundException('Customer record not found');
    }

    return record;
  }

  async update(id: number, dto: UpdateCustomerRecordDto) {
    await this.ensureExists(id);
    const codeID = await this.prisma.code.findUnique({
      where: { code: dto.code },
    });

    if (!codeID || !codeID.used) {
      throw new NotFoundException('Code not found or code is used');
    }

    try {
      return await this.prisma.customerRecord.update({
        where: { id },
        data: {
          name: dto.name,
          phone: dto.phone,
          codeId: codeID.id,
          outletName: dto.outletName,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Phone number already exists');
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prisma.customerRecord.delete({ where: { id } });
  }

  async findAllWithFilters(query: any) {
    const { outletName, phone, code, startDate, endDate } = query;

    const where: any = {};

    if (outletName) {
      where.outletName = {
        contains: outletName,
      };
    }

    if (phone) {
      where.phone = {
        contains: phone,
      };
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) {
        where.createdAt.gte = new Date(startDate);
      }
      if (endDate) {
        where.createdAt.lte = new Date(`${endDate}T23:59:59.999Z`);
      }
    }

    if (code) {
      where.code = {
        is: {
          code: {
            contains: code,
          },
        },
      };
    }

    return this.prisma.customerRecord.findMany({
      where,
      include: {
        code: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prisma.customerRecord.findUnique({
      where: { id },
    });
    if (!exists) throw new NotFoundException('Customer record not found');
  }

  async importFromExcel(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(worksheet);

    let createdCount = 0;
    const invalidCodes: string[] = [];

    for (const row of rows) {
      const name = row['name'];
      const phone = row['phone'];
      const code = row['prize code'];

      if (!name || !phone || !code) continue;

      const codeID = await this.prisma.code.findUnique({
        where: { code },
      });

      if (!codeID || codeID.used) {
        invalidCodes.push(code);
        continue;
      }

      try {
        await this.prisma.$transaction(async (tx) => {
          await tx.code.update({
            where: { id: codeID.id },
            data: { used: true },
          });

          await tx.customerRecord.create({
            data: {
              name,
              phone,
              codeId: codeID.id,
              outletName: 'shww ohh',
            },
          });
        });

        createdCount++;
      } catch (error) {
        if (error.code === 'P2002') {
          // Duplicate phone, skip
        } else {
          throw error;
        }
      }
    }

    return {
      createdCount,
      invalidCodes,
    };
  }
  async bulkCreateFromExcelData(rows: any[]) {
    let createdCount = 0;
    const failedRows: { row: number; reason: string }[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNumber = i + 2;

      const name = row['name'];
      const phone = row['phone']?.toString().trim();

      const code = row['code'];

      if (!name || !phone || !code) {
        failedRows.push({ row: rowNumber, reason: 'Missing required fields' });
        continue;
      }

      const codeRecord = await this.prisma.code.findUnique({
        where: { code },
      });

      if (!codeRecord) {
        failedRows.push({ row: rowNumber, reason: 'Code does not exist' });
        continue;
      }

      if (codeRecord.used) {
        failedRows.push({ row: rowNumber, reason: 'Code already used' });
        continue;
      }

      // try {
      await this.prisma.$transaction(async (tx) => {
        await tx.code.update({
          where: { id: codeRecord.id },
          data: { used: true },
        });

        await tx.customerRecord.create({
          data: {
            name,
            phone,
            outletName: 'shww ohh',
            codeId: codeRecord.id,
          },
        });
      });

      createdCount++;
      // }
    }

    return {
      createdCount,
      failedRows,
    };
  }
}
