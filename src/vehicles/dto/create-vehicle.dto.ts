import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  @IsNumber()
  max_weight_limit: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  plate: string;

  @IsNotEmpty()
  document: string;
}
