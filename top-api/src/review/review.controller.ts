import {
  Get,
  Post,
  Body,
  Param,
  Delete,
  Controller,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create') // by default 201
  async create(@Body() dto: CreateReviewDto) {
    this.reviewService.create(dto);
  }

  @Delete(':id') // by default 200
  async delete(@Param('id') id: string) {
    const deletedDoc = this.reviewService.delete(id);
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('byPorduct/:productId')
  async getByPorduct(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }
}
