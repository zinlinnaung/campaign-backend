// import { Role } from 'generated/client';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from 'generated/client';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsEnum(Role)
  // @IsNotEmpty()
  role: Role;

  // @IsBoolean()
  // is_active: boolean;
}

export class PasswordDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  currentPassword: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}
