import { IsString, IsNotEmpty, IsPhoneNumber, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCustomerRecordDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString() // You can change 'MM' to match your locale
  phone: string;

  @IsString()
  code: string;

  @IsString()
  @IsNotEmpty()
  outletName: string;
}

export class UpdateCustomerRecordDto extends PartialType(
  CreateCustomerRecordDto,
) {}
