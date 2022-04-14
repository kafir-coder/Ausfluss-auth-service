import { IsNotEmpty, IsNumber } from 'class-validator';

export class addPhotoDto {
  @IsNotEmpty()
  @IsNumber()
  vehicle_id: number;

  @IsNotEmpty()
  photo_url: string;
}
