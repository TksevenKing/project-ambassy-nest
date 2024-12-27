import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { UsersModule } from 'src/users/users.module';
import { JWT_SECRET } from '../configs/jwt-secret';  // configs folder contains the configurations like Jwt_secret
import {JwtModule} from '@nestjs/jwt';
import { EtudiantModule } from 'src/etudiant/etudiant.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/configs/jwt.strategy';



@Module({
  imports: [
    UsersModule,
    EtudiantModule,
    PassportModule,
    JwtModule.register({
      global: true,           // Pour que ca soit accessible globalement dans tout le projet
      secret: JWT_SECRET.secret,  // la cle secrete
      signOptions: {expiresIn: '1h'}, // this mean the token will not be validate after the indicate time
    })
  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, JwtStrategy],
  exports: [AuthentificationService, JwtModule],  // j'export authService pour qu'il soit accessible dans d'autre module
})
export class AuthentificationModule {}
