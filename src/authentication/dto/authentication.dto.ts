import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
