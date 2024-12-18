import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RenouvellementBourseService {
    constructor(@InjectRepository(RenouvellementBourseEntity)  private readonly renouvellementRepository : Repository <RenouvellementBourseEntity>){}

    getAllEtudiant(){
        return this.renouvellementRepository.find()
    }

}
