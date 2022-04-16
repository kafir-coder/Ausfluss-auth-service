import { IsNotEmpty, IsNumber } from 'class-validator';

export class addPhotoDto {
  @IsNotEmpty()
  @IsNumber()
  vehicle: number;

  @IsNotEmpty()
  photo_url: string;
}
