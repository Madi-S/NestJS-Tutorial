import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Types, disconnect } from 'mongoose';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from '../src/review/dto/create-review.dto';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  name: 'Test name',
  title: 'Test Title',
  description: 'Test description',
  rating: 5,
  productId,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  // Application mounting
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST) - success', async (done) => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then((res: request.Response) => {
        const body = res.body;
        createdId = body._id;
        expect(createdId).toBeDefined();
        done();
      });
  });

  it('review/byProduct/:productId (GET) - success', async (done) => {
    return request(app.getHttpServer())
      .get('/review/byPorduct/' + productId)
      .expect(200)
      .then((res: request.Response) => {
        const body = res.body;
        expect(body.length).toBe(1);
        done();
      });
  });

  it('review/byProduct/:productId (GET) - fail', async (done) => {
    const nonExistingProductId = new Types.ObjectId().toHexString();
    return request(app.getHttpServer())
      .get('/review/byPorduct/' + nonExistingProductId)
      .expect(200)
      .then((res: request.Response) => {
        const body = res.body;
        expect(body.length).toBe(0);
        done();
      });
  });

  it('/review/:id (DELETE) - success', () => {
    return request(app.getHttpServer())
      .delete('/review/' + createdId)
      .expect(200);
  });

  it('/review/:id (DELETE) - fail', () => {
    const nonExistingProductId = new Types.ObjectId().toHexString();
    return request(app.getHttpServer())
      .delete('/review/' + nonExistingProductId)
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND 
      });
  });

  afterAll(() => {
    disconnect();
  });
});
