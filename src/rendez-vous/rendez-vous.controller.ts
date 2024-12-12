import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { RendezVousService } from './rendez-vous.service';
import { rendezVousDto } from 'src/dtos/rendezVous.dto';

@Controller('rendez-vous')
export class RendezVousController {
    constructor(
        private readonly rendez_vousService : RendezVousService
    ){}
    // developpement des differents fonctions pour les CRUD
    @Get()
    async GETAllRendevous(){
        return await this.rendez_vousService.GetAllRendez_vous();
    }

    @Get(':id')
    async GetOneRendezVous(@Param('id') id){
        try {
        const rendezVous = await this.rendez_vousService.getOneRendezVous(id);
        
        if (!rendezVous) {
            throw new HttpException(
                'Le rendez-vous avec cet identifiant n\'existe pas.',
                HttpStatus.NOT_FOUND,
            );
        }
        
        return {
            data: rendezVous,
        };
    } catch (error) {
        throw new HttpException(
            'Une erreur est survenue lors de la récupération du rendez-vous.',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}

    @Post()
    async CreerRendezVous(@Body() rendezVousDto: rendezVousDto) {
        try {
            const nouveauRendezVous = await this.rendez_vousService.creerRendezVous(rendezVousDto);
            
            if (!nouveauRendezVous) {
                throw new HttpException(
                    'Le rendez-vous n\'a pas pu être créé.',
                    HttpStatus.BAD_REQUEST,
                );
            }
            
            return {
                message: 'Rendez-vous créé avec succès.',
                data: nouveauRendezVous,
            };
        } catch (error) {
            throw new HttpException(
                'Une erreur est survenue lors de la création du rendez-vous.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    

    
    @Put(':id')
     async modifierRendezVous(@Param('id') id , @Body() rendezVousdto: rendezVousDto ){
          const rendezVous = await this.rendez_vousService.UpdateRendezVous(id,rendezVousdto);

          if(rendezVous )
            return rendezVous;
          throw new HttpException('le rendez vous n\'est pas été Modifier',HttpStatus.NOT_FOUND);    
     }
    @Delete(':id')
    async supprimer(@Param('id') id : number){
        const rendezVous = await this.rendez_vousService.SupprimerRendez_vous(id);
        if(rendezVous)
            return rendezVous;
        throw new HttpException('le rendez vous n\'est pas été supprimer',HttpStatus.NOT_FOUND);    


    }

}
