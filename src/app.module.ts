import { Module } from '@nestjs/common';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { ForumModule } from './forum/forum.module';
import { RenouvellementBourseModule } from './renouvellement-bourse/renouvellement-bourse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecensementModule } from './recensement/recensement.module';




@Module({
  imports: [ 
    RendezVousModule, 
    ForumModule,
    RecensementModule,
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
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
