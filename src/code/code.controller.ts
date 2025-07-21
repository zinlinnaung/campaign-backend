import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CodeGeneratorService } from './code.service';
import { Response } from 'express';
import * as fs from 'fs';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Parser } from 'json2csv';
import { ExportCodesDto } from './dto/code.dto';

@Controller('code-generator')
export class CodeGeneratorController {
  constructor(private readonly service: CodeGeneratorService) {}

  @Post('export')
  async exportCodesToCSV(@Body() dto: ExportCodesDto, @Res() res: Response) {
    const csv = await this.service.exportToCSV(dto);

    res.setHeader('Content-Disposition', 'attachment; filename="codes.csv"');
    res.setHeader('Content-Type', 'text/csv');
    res.send(csv);
  }
  @Get('all')
  async getAllCodes() {
    return this.service.getAllCodes();
  }
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get('paginated')
  async getPaginatedCodes(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    const result = await this.service.getCodesPaginated(page, limit);
    return { codes: result.data, meta: result.meta };
  }

  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get('download')
  async exportPaginatedCodesToCSV(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Res() res: Response,
  ) {
    // Fetch the paginated codes based on the page and limit
    const result = await this.service.getCodesPaginated(page, limit);

    // Map the data to the correct format for CSV
    const data = result.data.map((item) => ({
      code: item.code,
      name: item.prizeName,
    }));

    // Convert data to CSV using json2csv
    const parser = new Parser({ fields: ['code', 'name'] });
    const csv = parser.parse(data);

    // Set up response headers for file download
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="paginated_codes.csv"',
    );
    res.setHeader('Content-Type', 'text/csv');

    // Send the CSV file as the response
    res.send(csv);
  }
}
