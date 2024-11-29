import { Module } from '@nestjs/common';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { ForumModule } from './forum/forum.module';
import { RessortissantModule } from './ressortissant/ressortissant.module';
import { RenouvellementBourseModule } from './renouvellement-bourse/renouvellement-bourse.module';




@Module({
  imports: [UtilisateurModule, RendezVousModule, ForumModule, RessortissantModule, RenouvellementBourseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
