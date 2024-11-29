import { Module } from '@nestjs/common';
import { RenouvellementBourseController } from './renouvellement-bourse.controller';
import { RenouvellementBourseService } from './renouvellement-bourse.service';

@Module({
  controllers: [RenouvellementBourseController],
  providers: [RenouvellementBourseService]
})
export class RenouvellementBourseModule {}
