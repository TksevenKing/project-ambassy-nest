import { Module } from '@nestjs/common';
import { RenouvellementBourseController } from './renouvellement-bourse.controller';
import { RenouvellementBourseService } from './renouvellement-bourse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { etudiantEntity } from 'src/entities/etudiant.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RenouvellementBourseEntity,etudiantEntity])],
  controllers: [RenouvellementBourseController],
  providers: [RenouvellementBourseService]
})
export class RenouvellementBourseModule {}
