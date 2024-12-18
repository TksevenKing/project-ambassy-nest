import { Module } from '@nestjs/common';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { RenouvellementBourseModule } from './renouvellement-bourse/renouvellement-bourse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecensementModule } from './recensement/recensement.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { UsersModule } from './users/users.module';
import { RessortissantModule } from './ressortissant/ressortissant.module';




@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ambassade_db',
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
    }),
    RendezVousModule, 
    RecensementModule,
    RenouvellementBourseModule,
    EtudiantModule,
    AuthentificationModule,
    UsersModule,
    RessortissantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
