import { IsArray, ValidateNested, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PrizeEntryDto {
  @IsString()
  prizeName: string;

  @IsInt()
  @Min(1)
  count: number;
}

export class ExportCodesDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PrizeEntryDto)
  prizes: PrizeEntryDto[];
}
