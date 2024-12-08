import { Controller, Get, Logger, Param } from '@nestjs/common';

@Controller('renouvellement')
export class RenouvellementBourseController {
    @Get()
    getAllEtudiant() {
        Logger.log('recupere tous les etudiants', 'EtudiantController');
        return 'retourne les etudiants';
    }
    @Get(':etudiant_id')
    getOneEtudiant(@Param('etudiant_id') etudiant_id) {
        Logger.log('recupere un seul etudiant', 'EtudiantController');
        return 'recupere un seul etudiant';
    }
    @Get('status/:email')
    getStatusEtudiant(@Param('email') email) {
        Logger.log('retourne si un etudiant est boursier ou pas', 'EtudiantController');
    }
}
