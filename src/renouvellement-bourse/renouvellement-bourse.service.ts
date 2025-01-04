import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { renouvellementDto } from '../dtos/renouvellement.dto';
import * as fs from 'fs';

@Injectable()
export class RenouvellementBourseService {
    constructor(
        @InjectRepository(RenouvellementBourseEntity)
        private readonly renouvellementRepository: Repository<RenouvellementBourseEntity>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(etudiantEntity)
        private readonly etudiantRepository: Repository<etudiantEntity>,
    ) {}

    // Créer un renouvellement
    async createRenouvellement(email: string, renouvellement: renouvellementDto, files: Express.Multer.File[]) {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new HttpException("Utilisateur non trouvé.", HttpStatus.NOT_FOUND);
        }

        const etudiant = await this.etudiantRepository.findOneBy({ user });
        if (!etudiant) {
            throw new HttpException("Étudiant non trouvé.", HttpStatus.NOT_FOUND);
        }

        if (!files || files.length === 0) {
            throw new HttpException("Aucun fichier fourni.", HttpStatus.BAD_REQUEST);
        }

        const documentPaths = files.map((file) => file.path);

        const nouvelRenouvellement = this.renouvellementRepository.create({
            ...renouvellement,
            status: 'nonTraiter',
            etudiant,
            documents: documentPaths,
        });

        return await this.renouvellementRepository.save(nouvelRenouvellement);
    }

    // Récupérer tous les renouvellements
    async getAllRenouvellement() {
        const infos = await this.renouvellementRepository.find({ relations: ['etudiant', 'etudiant.user'] });
        if (!infos || infos.length === 0) {
            throw new HttpException("Aucun renouvellement trouvé.", HttpStatus.NOT_FOUND);
        }

        return infos.map((info) => ({
            renouvellement_id: info.renouvellement_id,
            date_demande: info.date_demande,
            status: info.status,
            documents: info.documents,
            etudiant: {
                etudiant_id: info.etudiant.etudiant_id,
                nom: info.etudiant.user.nom,
                prenom: info.etudiant.user.username,
                email: info.etudiant.user.email,
                universite: info.etudiant.universite,
                filiere: info.etudiant.filiere,
                niveau_etude: info.etudiant.niveau_etude,
                annee_bac: info.etudiant.annee_bac,
                bourseActive: info.etudiant.bourseActive,
                sexe: info.etudiant.sexe,
                numero_passeport: info.etudiant.numero_passeport,
                ville: info.etudiant.ville,
                numero_consulaire: info.etudiant.numero_consulaire,
            },
        }));
    }

    // Récupérer un renouvellement par ID
    async getOneRenouvellement(renouvellement_id: number) {
        const info = await this.renouvellementRepository.findOne({
            where: { renouvellement_id },
            relations: ['etudiant', 'etudiant.user'],
        });
        if (!info) {
            throw new HttpException("Renouvellement non trouvé.", HttpStatus.NOT_FOUND);
        }
        return info;
    }

    // Récupérer un renouvellement par email
    async getOneRenouvellementByEmail(email: string) {
        const info = await this.renouvellementRepository.findOne({
            where: { etudiant: { user: { email } } },
            relations: ['etudiant', 'etudiant.user'],
        });
        if (!info) {
            throw new HttpException("Renouvellement non trouvé pour cet email.", HttpStatus.NOT_FOUND);
        }
        return info;
    }

    // Modifier le statut d'un renouvellement
    async setStatus(renouvellement_id: number, renouvellementdto: renouvellementDto) {
        const renouvellement = await this.renouvellementRepository.findOne({
            where: { renouvellement_id },
        });
        if (!renouvellement) {
            throw new HttpException("Renouvellement non trouvé.", HttpStatus.NOT_FOUND);
        }

        Object.assign(renouvellement, renouvellementdto);
        return await this.renouvellementRepository.save(renouvellement);
    }

    // Supprimer un renouvellement
    async removeRenouvellement(renouvellement_id: number) {
        const renouvellement = await this.renouvellementRepository.findOne({
            where: { renouvellement_id },
        });
        if (!renouvellement) {
            throw new HttpException("Renouvellement non trouvé.", HttpStatus.NOT_FOUND);
        }

        // Supprimer les fichiers associés au renouvellement
        if (renouvellement.documents && renouvellement.documents.length > 0) {
            renouvellement.documents.forEach((documentPath) => {
                if (fs.existsSync(documentPath)) {
                    fs.unlinkSync(documentPath);
                }
            });
        }

        return await this.renouvellementRepository.remove(renouvellement);
    }
    async getFiles(renouvellement_id: number) {
        const renouvellement = await this.renouvellementRepository.findOne({
            where: { renouvellement_id },
        });
    
        if (!renouvellement) {
            throw new HttpException("Renouvellement non trouvé.", HttpStatus.NOT_FOUND);
        }
    
        return renouvellement.documents; // Retourne les chemins des fichiers
    }
    
}
