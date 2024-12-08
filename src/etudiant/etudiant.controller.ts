import { Body, Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { renouvellementDto } from 'src/dtos/renouvellement.dto';

@Controller('etudiant')
export class EtudiantController {
    @Get()
    getInfoEtudiant() {
        Logger.log('recupere tous les infos de etudiant', 'EtudiantController');
        return 'retourne les infos';
    }

    @Post()
    createEtudiant(@Body() etudiantDto: etudiantDto){
        return 'Etudiant creer avec succes';
    }

    @Post('renoullement/:etudiant_id')
    demandeRenouvellement(@Param('etudiant_id') etudiant_id, @Body() renouvellementDto: renouvellementDto){
        return "demande de renouvellement avec succes";
    }

    @Put(':etudiant_id')
    modifierInfoEtu(@Param('etudiant_id') etudiant_id, @Body() etudiantDto: etudiantDto){
        return 'info de etudiant modifier avec succes';
    }

    @Put('password/:etudiant_id')
    modifierPassword(@Param('etudiant_id') etudiant_id, @Body() passwordDto){
        return 'mot de passe changer avec succes je suis le master de Oumar Cissé';
    }
}
