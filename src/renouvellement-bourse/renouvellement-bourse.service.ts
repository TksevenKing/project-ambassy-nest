import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { renouvellementDto } from '../dtos/renouvellement.dto';

@Injectable()
export class RenouvellementBourseService {
    constructor(
        @InjectRepository(RenouvellementBourseEntity)  private readonly renouvellementRepository : Repository <RenouvellementBourseEntity>,
        @InjectRepository(User) private readonly userRepository: Repository <User>,
        @InjectRepository(etudiantEntity) private readonly etudiantRepository: Repository <etudiantEntity>
    ){}

    async createRenouvellement(email: string, renouvellement: renouvellementDto){
        const user = await this.userRepository.findOneBy({email: email})
        if(!user){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        const etudiant = await this.etudiantRepository.findOneBy({user})
        if(!etudiant){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        const nouvelRenouvellement = this.renouvellementRepository.create({
            ...renouvellement,
            status: 'nonTraiter',
            etudiant,
          });
        return await this.renouvellementRepository.save(nouvelRenouvellement)
    }

    async getAllRenouvellement(){
        const infos = await this.renouvellementRepository.find({relations: ['etudiant']})
        if(!infos){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        return await infos
    }
    async getOneRenouvellement(renouvellement_id: number){
        const info = await this.renouvellementRepository.findOne({
            where: {renouvellement_id: renouvellement_id},
            relations: ['etudiant']
        })
        if(!info){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        return await info
    }
    async setStatus(renouvellement_id: number,renouvellementdto: renouvellementDto){
        const renouvellement = await this.renouvellementRepository.findOne({
            where: {renouvellement_id: renouvellement_id},
        })
        if(!renouvellement){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        Object.assign(renouvellement, renouvellementdto);
        return await this.renouvellementRepository.save(renouvellement);
    }
    /*async removeRenouvellement(renouvellement_id: number){
        const renouvellement = await this.renouvellementRepository.findOne({
            where: {renouvellement_id: renouvellement_id},
            relations: ['etudiant']
        })
        if(!renouvellement){
            throw new HttpException("NOT_FOUND!!!!!",HttpStatus.NOT_FOUND)
        }
        return await this.renouvellementRepository.remove(renouvellement)
    }*/
}
