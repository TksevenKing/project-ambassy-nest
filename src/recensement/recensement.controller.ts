import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RecensementService } from './recensement.service';
import { recensementDto } from 'src/dtos/recensement.dto';

@Controller('recensement')
export class RecensementController {
    constructor(
        private readonly  recencementService: RecensementService
    ){}

    @Get()
   async  GetAllREcensement(){
    try {
    const recensements = await this.recencementService.GetAllRecensement();
        if (!recensements) {
        throw new HttpException('No recensements found', HttpStatus.NOT_FOUND);
        }
        return recensements;
   } catch (error) {
        throw new HttpException(
        'Failed to retrieve recensements',
        HttpStatus.INTERNAL_SERVER_ERROR,
        );
  }     
    }

    @Get(':email')
    async GetRecensementByEMail(@Param('email') email: string){
        const recensement = await this.recencementService.GetOneRecensementbyEmail(email);
        if(recensement)
            return recensement;

        throw new HttpException(
            'on n\'a pas put recuperer le recensement',
            HttpStatus.INTERNAL_SERVER_ERROR,
            );

    }

    @Post()
    async creerRecensement(@Body() recensementdto: recensementDto){
        const  recensement =  await this.recencementService.creerRecensement(recensementdto);
        if(recensement)
            return recensement
        return null;
    }

    @Delete(':id')
    async supprimerRecensement(@Param('id') id: number){
        const recensement =  await this.recencementService.SupprimerRecensement(id)
        if(recensement)
            return recensement;
        throw new HttpException('on est peut pas supprimer ce rencensement',HttpStatus.NOT_FOUND);

    }




}
