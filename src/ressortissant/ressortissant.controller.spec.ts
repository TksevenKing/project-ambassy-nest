import { Test, TestingModule } from '@nestjs/testing';
import { RessortissantController } from './ressortissant.controller';

describe('RessortissantController', () => {
  let controller: RessortissantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RessortissantController],
    }).compile();

    controller = module.get<RessortissantController>(RessortissantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
