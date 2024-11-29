import { Test, TestingModule } from '@nestjs/testing';
import { RenouvellementBourseService } from './renouvellement-bourse.service';

describe('RenouvellementBourseService', () => {
  let service: RenouvellementBourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RenouvellementBourseService],
    }).compile();

    service = module.get<RenouvellementBourseService>(RenouvellementBourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
