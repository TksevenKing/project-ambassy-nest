import { Module } from '@nestjs/common';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { ForumModule } from './forum/forum.module';
import { RessortissantModule } from './ressortissant/ressortissant.module';
import { RenouvellementBourseModule } from './renouvellement-bourse/renouvellement-bourse.module';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [
    UtilisateurModule, 
    RendezVousModule, 
    ForumModule, 
    RessortissantModule,
    RenouvellementBourseModule,
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
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
