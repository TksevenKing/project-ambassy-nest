import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rendezVousDto } from 'src/dtos/rendezVous.dto';
import { rendez_vousEntity } from 'src/entities/rendezVous.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RendezVousService {
    constructor(
        @InjectRepository(rendez_vousEntity)
        private readonly rendez_vous : Repository<rendez_vousEntity>,
    ){}
     // Methode pour retourne tous les Rendez vous
    GetAllRendez_vous(){
        return this.rendez_vous.find();
    }

    
      // methode pour supprimer un rendez vous
    async SupprimerRendez_vous (id_rendez_vous){
        const Rendez_vous = await this.rendez_vous.find({where: {rdv_id:id_rendez_vous}})
        
        if(Rendez_vous){
            return this.rendez_vous.remove(Rendez_vous);
        }else return null
    }
    // methode pour retourner un seule rendez vous par son id

    async getOneRendezVous(id_rendez_vous) {
        try {
            const rendezVous = await this.rendez_vous.findOne({ where: { rdv_id: id_rendez_vous } });
            if (!rendezVous) {
                throw new Error(`Rendez-vous avec l'ID ${id_rendez_vous} introuvable.`);
            }
            return rendezVous;
        } catch (error) {
            console.error("Erreur lors de la récupération du rendez-vous :", error);
            throw new Error("Impossible de récupérer le rendez-vous.");
        }
    }

    // Supprimer un rendez-vous par son ID
    async supprimerRendezVous(id_rendez_vous) {
        try {
            const rendezVous = await this.rendez_vous.findOne({ where: { rdv_id: id_rendez_vous } });
            if (!rendezVous) {
                throw new Error(`Rendez-vous avec l'ID ${id_rendez_vous} introuvable.`);
            }
            await this.rendez_vous.remove(rendezVous);
            return { message: `Rendez-vous avec l'ID ${id_rendez_vous} supprimé avec succès.` };
        } catch (error) {
            console.error("Erreur lors de la suppression du rendez-vous :", error);
            throw new Error("Impossible de supprimer le rendez-vous.");
        }
    }

    // Créer un nouveau rendez-vous
    async creerRendezVous(rendezVousDto: rendezVousDto) {
        try {
            const nouveauRendezVous = await this.rendez_vous.save(rendezVousDto);
            return nouveauRendezVous;
        } catch (error) {
            console.error("Erreur lors de la création du rendez-vous :", error);
            throw new Error("Impossible de créer le rendez-vous.");
        }
    }

    async UpdateRendezVous(id_rendez_vous, rendez_vousdto: rendezVousDto){
        try {
            const RendezVous = await this.rendez_vous.findOne({ where: { rdv_id: id_rendez_vous } });

            if(RendezVous){
                return this.rendez_vous.update(id_rendez_vous,rendez_vousdto);
                
            }

            
        } catch (error) {
            console.error("Erreur lors de la modification du rendez-vous :", error);
            throw new Error("Impossible de la modification du  rendez-vous.");
            
        }
    }
  
    
}
