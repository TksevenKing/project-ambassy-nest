import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { recensementDto } from 'src/dtos/recensement.dto';
import { recensementEntity } from 'src/entities/recensement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecensementService {
    constructor (
        @InjectRepository(recensementEntity)
        private readonly   recensementRepository:Repository<recensementEntity>,
    ){}

    async GetAllRecensement(){
         const recensement = await this.recensementRepository.find();
        if(recensement)
         return recensement;
        return null
    }

    async GetOneRecensementbyEmail(mail){
        const recensement = await this.recensementRepository.findOneBy({email:mail});
        if(recensement)
            return recensement
        throw new Error(`le rencensement avec l'ID ${recensement} est  introuvable.`);



    }

    async GetOneRecensement(id: number)
    {
        try {
        const recensement = await this.recensementRepository.findOne({ where: {recensement_id:id } });
        if (!recensement) {
            throw new Error(`le rencensement avec l'ID ${recensement} est  introuvable.`);
        }
        return recensement;
    } catch (error) {
        console.error("Erreur lors de la récupération du recensement :", error);
        throw new Error("Impossible de récupérer le recesement.");
    }
    }

    async creerRecensement(recensementdto: recensementDto){
        try {
            const nouveau_recensement = await this.recensementRepository.save(recensementdto);
            if(!nouveau_recensement)
            {
                return new Error('le recensement n\'est pas creer');
            }
            return nouveau_recensement;

            
        } catch (error) {
            console.error("Erreur lors de la récupération du recensement :", error);
            throw new Error("Impossible de Enregistrer un nouveau recensement.");
            
        }

       
    }

    async SupprimerRecensement(id_Recensement)
    {
        try {
            const recensement = await this.recensementRepository.findOne({where: {recensement_id:id_Recensement}});
            if(!recensement)
            {
                return new Error("Vous ne pouvez supprimer car cet recensement  n'existe pas");
            }
             
            await this.recensementRepository.remove(recensement);
            return { message: `Rendez-vous avec l'ID ${id_Recensement} supprimé avec succès.` };

            
        } catch (error) {
            throw new Error("Impossible de supprimer cet recensement.");

            
        }
    }

    
}
