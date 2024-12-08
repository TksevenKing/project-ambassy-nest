import { Module } from '@nestjs/common';
import { RecensementController } from './recensement.controller';
import { RecensementService } from './recensement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { recensementEntity } from 'src/entities/recensement.entity';

@Module({
  imports:[TypeOrmModule.forFeature([recensementEntity])],
  controllers: [RecensementController],
  providers: [RecensementService]
})
export class RecensementModule {}
