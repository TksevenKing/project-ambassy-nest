import { Module } from '@nestjs/common';
import { RessortissantController } from './ressortissant.controller';
import { RessortissantService } from './ressortissant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ressortissantEntity } from 'src/entities/ressortissant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ressortissantEntity])],
  controllers: [RessortissantController],
  providers: [RessortissantService]
})
export class RessortissantModule {}
