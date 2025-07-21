import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { writeFileSync } from 'fs';
import { Parser } from 'json2csv';
import * as path from 'path';
import { ExportCodesDto } from './dto/code.dto';

@Injectable()
export class CodeGeneratorService {
  constructor(private readonly prisma: PrismaService) {}

  private generateCode(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private generateUniqueCodes(
    count: number,
    length: number,
    existingCodes: Set<string>,
  ): string[] {
    const codes = new Set<string>();
    while (codes.size < count) {
      const code = this.generateCode(length);
      if (!existingCodes.has(code) && !codes.has(code)) {
        codes.add(code);
      }
    }
    return Array.from(codes);
  }

  async exportToCSV(dto: ExportCodesDto): Promise<string> {
    const existing = await this.prisma.code.findMany({
      select: { code: true },
    });
    const existingSet = new Set(existing.map((e) => e.code));

    const finalCodes = [];

    for (const prize of dto.prizes) {
      const generated = this.generateUniqueCodes(prize.count, 6, existingSet);
      generated.forEach((c) => existingSet.add(c));
      finalCodes.push(
        ...generated.map((code) => ({ code, prizeName: prize.prizeName })),
      );
    }

    const inserted = await this.prisma.$transaction(
      finalCodes.map((codeObj) => this.prisma.code.create({ data: codeObj })),
    );

    const data = inserted.map((item) => ({
      code: item.code,
      name: item.prizeName,
    }));

    const parser = new Parser({ fields: ['code', 'name'] });
    return parser.parse(data); // Return CSV string
  }

  async getAllCodes() {
    return this.prisma.code.findMany({
      orderBy: { id: 'desc' },
    });
  }

  async getCodesPaginated(page: number, rowsPerPage: number) {
    const codes = await this.prisma.code.findMany({
      skip: (page - 1) * rowsPerPage,
      take: rowsPerPage,
      orderBy: { createdAt: 'desc' },
    });

    const totalCount = await this.prisma.code.count();

    return {
      data: codes,
      meta: {
        page,
        rowsPerPage,
        totalPages: Math.ceil(totalCount / rowsPerPage),
        totalCount,
      },
    };
  }
}
