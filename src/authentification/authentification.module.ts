import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { UsersModule } from 'src/users/users.module';
import { JWT_SECRET } from '../configs/jwt-secret';  // configs folder contains the configurations like Jwt_secret
import {JwtModule} from '@nestjs/jwt';



@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,           // Pour que ca soit accessible globalement dans tout le projet
      secret: JWT_SECRET.secret,  // la cle secrete
      signOptions: {expiresIn: '60s'}, // this mean the token will not be validate after the indicate time
    })
  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
  exports: [AuthentificationService],  // j'export authService pour qu'il soit accessible dans d'autre module
})
export class AuthentificationModule {}
