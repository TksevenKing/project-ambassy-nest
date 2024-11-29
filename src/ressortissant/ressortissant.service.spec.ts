import { Test, TestingModule } from '@nestjs/testing';
import { RessortissantService } from './ressortissant.service';

describe('RessortissantService', () => {
  let service: RessortissantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RessortissantService],
    }).compile();

    service = module.get<RessortissantService>(RessortissantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
