/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateDriverDto {
  @IsNotEmpty()
  @Length(4, 30)
  name: string;

  @IsNotEmpty()
  @Length(8, 100)
  password: string;

  @IsNotEmpty()
  num_BI: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  driver_id: string;

  @IsNotEmpty()
  driver_type: string;

  @IsNotEmpty()
  adress: string;
}
