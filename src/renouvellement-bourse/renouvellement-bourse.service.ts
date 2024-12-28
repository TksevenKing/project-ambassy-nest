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
        @InjectRepository(RenouvellementBourseEntity) private readonly renouvellementRepository: Repository<RenouvellementBourseEntity>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(etudiantEntity) private readonly etudiantRepository: Repository<etudiantEntity>
    ) { }

    async createRenouvellement(email: string, renouvellement: renouvellementDto, files: Express.Multer.File[]) {
        const user = await this.userRepository.findOneBy({ email: email })
        if (!user) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND)
        }
        const etudiant = await this.etudiantRepository.findOneBy({ user })
        if (!etudiant) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND)
        }
        const documentPaths = files.map(file => file.path); // je recceuille le chemin des fichiers uploader

        const nouvelRenouvellement = this.renouvellementRepository.create({
            ...renouvellement,
            status: 'nonTraiter',
            etudiant,
            documents: documentPaths,
        });
        return await this.renouvellementRepository.save(nouvelRenouvellement)
    }

    async getAllRenouvellement() {
        const infos = await this.renouvellementRepository.find({ relations: ['etudiant', 'etudiant.user'] })
        if (!infos) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND)
        }
        return await infos.map(info => ({
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
                numero_consulaire: info.etudiant.numero_consulaire
            }

        }))
    }
    async getOneRenouvellement(renouvellement_id: number) {
        const info = await this.renouvellementRepository.findOne({
            where: { renouvellement_id: renouvellement_id },
            relations: ['etudiant','etudiant.user']
        })
        if (!info) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND)
        }
        return info
    }
    async setStatus(renouvellement_id: number, renouvellementdto: renouvellementDto) {
        const renouvellement = await this.renouvellementRepository.findOne({
            where: { renouvellement_id: renouvellement_id },
        })
        if (!renouvellement) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND)
        }
        Object.assign(renouvellement, renouvellementdto);
        return await this.renouvellementRepository.save(renouvellement);
    }

    async removeRenouvellement(renouvellement_id: number) {
        const renouvellement = await this.renouvellementRepository.findOne({
            where: { renouvellement_id: renouvellement_id },
        });
        if (!renouvellement) {
            throw new HttpException("NOT_FOUND!!!!!", HttpStatus.NOT_FOUND);
        }

        // Delete associated documents from the file system
        if (renouvellement.documents && renouvellement.documents.length > 0) {
            renouvellement.documents.forEach((documentPath) => {
                if (fs.existsSync(documentPath)) {
                    fs.unlinkSync(documentPath);
                }
            });
        }

        return await this.renouvellementRepository.remove(renouvellement);
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

