import { Module } from '@nestjs/common';
import { RessortissantController } from './ressortissant.controller';
import { RessortissantService } from './ressortissant.service';

@Module({
  controllers: [RessortissantController],
  providers: [RessortissantService]
})
export class RessortissantModule {}
