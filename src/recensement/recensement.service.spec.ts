import { Test, TestingModule } from '@nestjs/testing';
import { RecensementService } from './recensement.service';

describe('RecensementService', () => {
  let service: RecensementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecensementService],
    }).compile();

    service = module.get<RecensementService>(RecensementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
