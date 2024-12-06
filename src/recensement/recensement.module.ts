import { Module } from '@nestjs/common';
import { RecensementController } from './recensement.controller';
import { RecensementService } from './recensement.service';

@Module({
  controllers: [RecensementController],
  providers: [RecensementService]
})
export class RecensementModule {}
