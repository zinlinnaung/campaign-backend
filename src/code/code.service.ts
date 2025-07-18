import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { writeFileSync } from 'fs';
import { Parser } from 'json2csv';
import * as path from 'path';

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

  async exportToCSV(): Promise<string> {
    const totalNeeded = 2000;
    const perPrize = 1000;

    // 🔍 1. Fetch existing codes
    const existing = await this.prisma.code.findMany({
      select: { code: true },
    });
    const existingSet = new Set(existing.map((e) => e.code));

    // 🔢 2. Generate codes
    const ferrovitCodes = this.generateUniqueCodes(perPrize, 6, existingSet);
    ferrovitCodes.forEach((c) => existingSet.add(c));
    const enatCodes = this.generateUniqueCodes(perPrize, 6, existingSet);
    const glucomealCodes = this.generateUniqueCodes(perPrize, 6, existingSet);

    const finalCodes = [
      ...glucomealCodes.map((code) => ({ code, prizeName: 'glucomeal' })),
      // ...ferrovitCodes.map((code) => ({ code, prizeName: 'ferrovit' })),
      ...enatCodes.map((code) => ({ code, prizeName: 'enat' })),
    ];

    // 💾 3. Insert into DB
    const inserted = await this.prisma.$transaction(
      finalCodes.map((codeObj) => this.prisma.code.create({ data: codeObj })),
    );

    // 🧾 4. Convert to CSV (no file saving)
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
