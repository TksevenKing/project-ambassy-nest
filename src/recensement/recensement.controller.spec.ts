import { Test, TestingModule } from '@nestjs/testing';
import { RecensementController } from './recensement.controller';

describe('RecensementController', () => {
  let controller: RecensementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecensementController],
    }).compile();

    controller = module.get<RecensementController>(RecensementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
