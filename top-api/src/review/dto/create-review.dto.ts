import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @Max(5, { message: 'Rating value cannot be more than 1' })
  @Min(1, { message: 'Rating value cannot be less than 1' })
  @IsNumber()
  rating: number;

  @IsString()
  productId: string;
}
