import { Controller, Get, Logger, Param, Post } from '@nestjs/common';

@Controller('recensement')
export class RecensementController {
    @Get()
    getAllRecensement(){
        Logger.log('get all recensement', "RecencesementController");
        return 'la liste des personnes recenser';
    }
    @Get(':email')
    getOneByemail(@Param('email') email){
        Logger.log('get one by email', "RecencesementController");
        return 'verifie si la personne est recensee via son email';
    }
    @Post()
    createRecensement(){
        Logger.log('create recensement', "RecencesementController");
        return 'create succes';
    }
}
