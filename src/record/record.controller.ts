import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CustomerRecordService } from './record.service';
import { CreateCustomerRecordDto, UpdateCustomerRecordDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';

import * as multer from 'multer';

@Controller('customer-records')
export class CustomerRecordController {
  constructor(private readonly service: CustomerRecordService) {}

  @Post()
  async create(@Body() dto: CreateCustomerRecordDto) {
    return this.service.create(dto);
  }

  @Post('upload-excel')
  async uploadExcel(@Body() body: { records: any[] }) {
    return this.service.bulkCreateFromExcelData(body.records);
  }

  @Post('upload-excel-data')
  async uploadExcelData(@Body() body: { records: any[] }) {
    return this.service.bulkCreateFromExcelData(body.records);
  }

  @Get()
  async findAll(@Query() query: any) {
    const { outletName, phone, code, startDate, endDate } = query;

    return this.service.findAllWithFilters({
      outletName,
      phone,
      code,
      startDate,
      endDate,
    });
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCustomerRecordDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
