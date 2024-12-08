import { Module } from '@nestjs/common';
import { RendezVousController } from './rendez-vous.controller';
import { RendezVousService } from './rendez-vous.service';
import { rendez_vousEntity } from 'src/entities/rendezVous.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([rendez_vousEntity])],
  controllers: [RendezVousController],
  providers: [RendezVousService]
})
export class RendezVousModule {}
