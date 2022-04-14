import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  @IsNumber()
  max_weight_capacity: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  document_photo: string;
}
