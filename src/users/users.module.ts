import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { etudiantEntity } from 'src/entities/etudiant.entity';
import { ressortissantEntity } from 'src/entities/ressortissant.entity';
// import { ressortissantEntity } from 'src/entities/ressortissant.entity';
import * as bcrypt from 'bcrypt'
import { employe_ambassadeEntity } from 'src/entities/employeAmbassade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, etudiantEntity, ressortissantEntity, employe_ambassadeEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]  // ajout du UserService to the exports[] in order to be accessible outside of this module
})
export class UsersModule { }
