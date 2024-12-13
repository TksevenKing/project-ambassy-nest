import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {

    constructor(
        private authentificationService: AuthentificationService
    ){}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() input: {username: string; password: string}){
        return this.authentificationService.singIn(input);
    }
}
