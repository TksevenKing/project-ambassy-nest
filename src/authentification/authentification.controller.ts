import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request, Param } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AuthentificationGuard } from './authentification.guard';
import { EtudiantService } from 'src/etudiant/etudiant.service';

@Controller('authentification')
export class AuthentificationController {

    constructor(
        private authentificationService: AuthentificationService,
        private etudiantService: EtudiantService
    ){}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() input: {username: string; password: string}){
        return this.authentificationService.singIn(input);
    }



    @UseGuards(AuthentificationGuard)    // ceci permet de proteger cette requette
    @Get('me')
    getUserInfo(@Request() request){     // Pour recuperer les infos(Profil) du user
        return request.user;             // on retourne l'utilisateur qu'on a relier a la requete dans le guard      
    }

    @UseGuards(AuthentificationGuard)
    @Get('etudiant/:etudiant_id')
   async getInfoEtudiant(@Param('etudiant_id') etudiant_id){
       const infoEtu =  await this.etudiantService.getInfoEtudiant(etudiant_id);
       return infoEtu;
    }
}
