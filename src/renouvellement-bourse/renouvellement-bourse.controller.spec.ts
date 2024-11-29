import { Test, TestingModule } from '@nestjs/testing';
import { RenouvellementBourseController } from './renouvellement-bourse.controller';

describe('RenouvellementBourseController', () => {
  let controller: RenouvellementBourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RenouvellementBourseController],
    }).compile();

    controller = module.get<RenouvellementBourseController>(RenouvellementBourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
