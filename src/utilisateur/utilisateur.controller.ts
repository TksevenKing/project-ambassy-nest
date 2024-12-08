import { Controller, Get } from '@nestjs/common';

@Controller('utilisateur')
export class UtilisateurController {
    @Get()
    hello(){

        return "hello words";


    }
    
}
