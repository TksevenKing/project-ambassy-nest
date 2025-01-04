import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(etudiantEntity)
    private readonly etudiantsRepository: Repository<etudiantEntity>
  ) {}

  // Création d'un étudiant
  async createEtudiant(etudiantDto: etudiantDto) {
    const etudiant = this.etudiantsRepository.create(etudiantDto);
    await this.etudiantsRepository.save(etudiant); // Correction pour s'assurer que c'est l'entité créée qui est sauvegardée
    return etudiant;
  }

  // Récupérer les informations d'un étudiant avec son ID
  async getInfoEtudiant(etudiant_id: number) {
    const etudiant = await this.etudiantsRepository.findOne({
      where: { etudiant_id },
      relations: ['user'], // Inclure les relations avec l'utilisateur
    });

    if (!etudiant) {
      return null;
    }
    return etudiant;
  }

  // Modifier les informations d'un étudiant
  async modifierInfoEtu(etudiant_id: number, etudiantDto: etudiantDto) {
    const etudiant = await this.etudiantsRepository.findOneBy({ etudiant_id });

    if (!etudiant) {
      return null;
    }

    await this.etudiantsRepository.update(etudiant_id, etudiantDto); 
    return this.etudiantsRepository.findOneBy({ etudiant_id }); 
  }

  // Supprimer un étudiant
  async supprimerEtudiant(etudiant_id: number) {
    const etudiant = await this.etudiantsRepository.findOneBy({ etudiant_id });

    if (!etudiant) {
      return null;
    }

    await this.etudiantsRepository.delete(etudiant_id);
    return { message: 'Étudiant supprimé avec succès' };
  }

  // Récupérer tous les étudiants
  async recupererTousLesEtudiants() {
    return this.etudiantsRepository.find({
      relations: ['user'], 
    });
  }
}
