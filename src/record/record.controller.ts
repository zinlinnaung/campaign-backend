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
} from '@nestjs/common';
import { CustomerRecordService } from './record.service';
import { CreateCustomerRecordDto, UpdateCustomerRecordDto } from './dto';

@Controller('customer-records')
export class CustomerRecordController {
  constructor(private readonly service: CustomerRecordService) {}

  @Post()
  async create(@Body() dto: CreateCustomerRecordDto) {
    return this.service.create(dto);
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
