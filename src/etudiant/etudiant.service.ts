import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { renouvellementDto } from 'src/dtos/renouvellement.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EtudiantService {

    constructor(
        @InjectRepository(etudiantEntity)
        private readonly etudiantsRepository: Repository<etudiantEntity>,
        // On a besoin de ce etudiantsRepository pour implementer les fcts predefinis comme findOne() etc ....

    ) { }
    async createEtudiant(etudiantDto: etudiantDto) {
        const etu = await this.etudiantsRepository.create(etudiantDto);
        this.etudiantsRepository.save(etudiantDto);
        return etu;
    }
    async getInfoEtudiant(etudiant_id) {
        const etu = await this.etudiantsRepository.findOne({ 
            where: { etudiant_id},
            relations: ['user']
        });
        if (etu) {
            return etu;
        }
        return null;
    }

    async modifierInfoEtu(etudiant_id, etudiantDto) {
        const etu = await this.etudiantsRepository.findOneBy({ etudiant_id });
        if (etu) {
            const newEtu = this.etudiantsRepository.update(etudiant_id, etudiantDto);
            return this.etudiantsRepository.findOneBy({ etudiant_id }); // l'etudiant avec les informations vise a jour
        }
        return null;
    }




}
