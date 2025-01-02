import { Controller, Get, Logger, Param, Post, Put, Delete, UseInterceptors, UploadedFile, Body, UploadedFiles, Query } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { RenouvellementBourseService } from './renouvellement-bourse.service';
import * as fs from 'fs';
import { renouvellementDto } from 'src/dtos/renouvellement.dto';
import { CustomRequest } from 'src/Interface';
import { query } from 'express';

@Controller('renouvellement')
export class RenouvellementBourseController {
    constructor(private readonly renouvellementservice: RenouvellementBourseService){}
    
    @Get()
    getAllRenouvellement(@Query() query){
        return this.renouvellementservice.getAllRenouvellement()
    }

    @Get(':renouvellement_id')
    getOneRenouvellement(@Param('renouvellement_id') renouvellement_id: number){
        return this.renouvellementservice.getOneRenouvellement(renouvellement_id)
    }
    
    @Post()
    @UseInterceptors(FilesInterceptor('files',2,{
        storage: diskStorage({
          destination: (req: CustomRequest, file, callback) =>{
            if (!req.generatedFolderPath) {
                const globalFolder = './src/Renouvellement';
                const uniqueFolder = `${new Date().toISOString().split('T')[0]}-${Date.now()}`;
                req.generatedFolderPath = `${globalFolder}/${uniqueFolder}`;
                fs.mkdirSync(req.generatedFolderPath, { recursive: true });
            }
            callback(null, req.generatedFolderPath);
          },
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now()
            const ext = extname(file.originalname)
            const filename = `${file.originalname}-${uniqueSuffix}${ext}`
            callback(null, filename);
          },
        }),
      }))
    handleUpload(@UploadedFiles() files: Express.Multer.File[],@Body('email') email: string,@Body() renouvellement: renouvellementDto){
        return this.renouvellementservice.createRenouvellement(email, renouvellement,files)
    }

    @Put(':renouvelement_id')
    setStatus(@Param('renouvellement_id') renouvellement_id: number,@Body() renouvellement: renouvellementDto){
        Logger.log('Modification du dossier.zip étudiant', 'EtudiantController');
        return this.renouvellementservice.setStatus(renouvellement_id,renouvellement)
    }


    @Delete(':renouvellement_id')
    removeRenouvellement(@Param('renouvellement_id') renouvellement_id: number) {
        Logger.log('Suppression d\'un dossier.zip étudiant', 'EtudiantController');
        return this.renouvellementservice.removeRenouvellement(renouvellement_id);
    }


}
