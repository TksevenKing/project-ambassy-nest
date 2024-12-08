import { Module } from '@nestjs/common';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiantEntity } from 'src/entities/etudiant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([etudiantEntity])],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
