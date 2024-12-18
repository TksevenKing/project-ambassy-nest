import { Body, Controller, Get, Logger, Param, Post, Put , HttpStatus, HttpException} from '@nestjs/common';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { renouvellementDto } from 'src/dtos/renouvellement.dto';
import { EtudiantService } from './etudiant.service';

@Controller('etudiant')
export class EtudiantController {

    constructor(private readonly etudiantService: EtudiantService) { }

    @Get(':etudiant_id')
    async getInfoEtudiant(@Param('etudiant_id') etudiant_id) {
        Logger.log('recupere tous les infos de etudiant', 'EtudiantController');
        const InfoEtu =  await this.etudiantService.getInfoEtudiant(etudiant_id);
        if(!InfoEtu){
             throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return InfoEtu;
    }

    @Post()
    async createEtudiant(@Body() etudiantDto: etudiantDto){
        Logger.log('create etudiant','etudiantController');
        const etu  = await this.etudiantService.createEtudiant(etudiantDto);
        return etu;
    }

    @Post('renouvellement/:etudiant_id')
    demandeRenouvellement(@Param('etudiant_id') etudiant_id, @Body() renouvellementDto: renouvellementDto){
        return "demande de renouvellement avec succes";
    }

    @Put(':etudiant_id')
    async modifierInfoEtu(@Param('etudiant_id') etudiant_id, @Body() etudiantDto: etudiantDto){
        const newEtu = await this.etudiantService.modifierInfoEtu(etudiant_id,etudiantDto);
        if(!newEtu){
            throw new HttpException('not modified info etu', HttpStatus.NOT_MODIFIED);
        }
        return newEtu;
    }

    // @Put('password/:etudiant_id')
    // async modifierPassword(@Param('etudiant_id') etudiant_id, @Body() etudiantDto){
    //     const newPass = await this.etudiantService.modifierPassword(etudiant_id, etudiantDto) ;
    //     if (!newPass){
    //         throw new HttpException('password not modified', HttpStatus.NOT_MODIFIED);
    //     }
    //     return newPass;
    // }
}
