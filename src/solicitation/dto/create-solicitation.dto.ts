import { IsNotEmpty } from 'class-validator';

export class CreateSolicitationDto {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  budget_proposal: number;

  @IsNotEmpty()
  max_weight: number;

  @IsNotEmpty()
  delivery_expectation_date: string;

  @IsNotEmpty()
  loading_location: string;

  @IsNotEmpty()
  offloading_location: string;
}
