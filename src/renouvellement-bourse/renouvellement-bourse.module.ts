import { Module } from '@nestjs/common';
import { RenouvellementBourseController } from './renouvellement-bourse.controller';
import { RenouvellementBourseService } from './renouvellement-bourse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RenouvellementBourseEntity])],
  controllers: [RenouvellementBourseController],
  providers: [RenouvellementBourseService]
})
export class RenouvellementBourseModule {}
