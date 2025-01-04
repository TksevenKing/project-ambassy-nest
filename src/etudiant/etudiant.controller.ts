import { Body, Controller, Delete, Get, Logger, Param, Post, Put, HttpStatus, HttpException, UseGuards } from '@nestjs/common';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { renouvellementDto } from 'src/dtos/renouvellement.dto';
import { EtudiantService } from './etudiant.service';
import { EtudiantGuard } from './etudiant.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('etudiant')
export class EtudiantController {
    constructor(private readonly etudiantService: EtudiantService) {}

    @UseGuards(AuthGuard('jwt'), EtudiantGuard)
    @Get(':etudiant_id')
    async getInfoEtudiant(@Param('etudiant_id') etudiant_id) {
        Logger.log('Recupere tous les infos de l\'étudiant', 'EtudiantController');
        const infoEtu = await this.etudiantService.getInfoEtudiant(etudiant_id);
        if (!infoEtu) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return infoEtu;
    }

    @Post()
    async createEtudiant(@Body() etudiantDto: etudiantDto) {
        Logger.log('Create étudiant', 'EtudiantController');
        const etu = await this.etudiantService.createEtudiant(etudiantDto);
        return etu;
    }

    @UseGuards(AuthGuard('jwt'), EtudiantGuard)
    @Post('renouvellement/:etudiant_id')
    async demandeRenouvellement(@Param('etudiant_id') etudiant_id, @Body() renouvellementDto: renouvellementDto) {
        Logger.log(`Demande de renouvellement pour étudiant ${etudiant_id}`, 'EtudiantController');
        return 'Demande de renouvellement avec succès';
    }

    @UseGuards(AuthGuard('jwt'), EtudiantGuard)
    @Put(':etudiant_id')
    async modifierInfoEtu(@Param('etudiant_id') etudiant_id, @Body() etudiantDto: etudiantDto) {
        const newEtu = await this.etudiantService.modifierInfoEtu(etudiant_id, etudiantDto);
        if (!newEtu) {
            throw new HttpException('Not modified info etu', HttpStatus.NOT_MODIFIED);
        }
        return newEtu;
    }

    // Nouvelle méthode : Supprimer un étudiant
    @UseGuards(AuthGuard('jwt'), EtudiantGuard)
    @Delete(':etudiant_id')
    async supprimerEtudiant(@Param('etudiant_id') etudiant_id) {
        Logger.log(`Suppression de l'étudiant ${etudiant_id}`, 'EtudiantController');
        const result = await this.etudiantService.supprimerEtudiant(etudiant_id);
        if (!result) {
            throw new HttpException('Etudiant not found', HttpStatus.NOT_FOUND);
        }
        return { message: 'Etudiant supprimé avec succès' };
    }

    // Nouvelle méthode : Récupérer tous les étudiants
    @UseGuards(AuthGuard('jwt'), EtudiantGuard)
    @Get()
    async recupererTousLesEtudiants() {
        Logger.log('Récupérer tous les étudiants', 'EtudiantController');
        const etudiants = await this.etudiantService.recupererTousLesEtudiants();
        if (!etudiants || etudiants.length === 0) {
            throw new HttpException('Aucun étudiant trouvé', HttpStatus.NOT_FOUND);
        }
        return etudiants;
    }
}
