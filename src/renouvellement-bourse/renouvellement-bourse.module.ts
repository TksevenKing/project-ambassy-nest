import { Module } from '@nestjs/common';
import { RenouvellementBourseController } from './renouvellement-bourse.controller';
import { RenouvellementBourseService } from './renouvellement-bourse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenouvellementBourseEntity } from 'src/entities/renouvellementBourse.entity';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { MulterModule } from '@nestjs/platform-express/multer';
import { User } from 'src/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RenouvellementBourseEntity,etudiantEntity,User]),MulterModule.register({dest: './src/Renouvellement'})],
  controllers: [RenouvellementBourseController],
  providers: [RenouvellementBourseService]
})
export class RenouvellementBourseModule {}
