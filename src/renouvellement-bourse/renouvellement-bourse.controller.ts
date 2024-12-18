import { Controller, Get, Logger, Param, Post, Put, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { RenouvellementBourseService } from './renouvellement-bourse.service';
import * as fs from 'fs';

@Controller('renouvellement')
export class RenouvellementBourseController {
    constructor(private readonly renouvellementservice: RenouvellementBourseService){}
    
    @Get(':nom')
    getRenouvellement( nom: string){
        return "x"
    }
    
    @Post()
    @UseInterceptors(FilesInterceptor('files',2,{
        storage: diskStorage({
          destination: (req, file, callback) =>{
            
            const dest = `./Fichiers/${new Date().toISOString().split('T')[0]}`
            fs.mkdirSync(dest, { recursive: true });
            callback(null, dest)
          },
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now()
            const ext = extname(file.originalname)
            const filename = `${file.originalname}-${uniqueSuffix}${ext}`
            callback(null, filename);
          },
        }),
      }))
    handleUpload(@UploadedFile() file: Express.Multer.File,@Param('nom') nom: String){
        return "Upload success"
    }

    @Put(':renouvelement_id')
    updateFile(){
        Logger.log('Modification du dossier.zip étudiant', 'EtudiantController');
    }

    @Delete(':renouvellement_id')
    deleteFile(){
        Logger.log('Supprimer un dossier.zip etudiant', 'EtudiantController');
    }
}
