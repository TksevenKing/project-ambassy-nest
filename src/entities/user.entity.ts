import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { etudiantEntity } from './etudiant.entity';
import { ressortissantEntity } from './ressortissant.entity';
import { employe_ambassadeEntity } from './employeAmbassade.entity';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  user_id: number;

  @Column()
  nom: string;

  @Column({name: 'prenom'})
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  telephone: string;

  @Column()
  type: string; //'student' | 'ressortissant' | 'employee';

  @OneToOne(() => etudiantEntity, (etudiant) => etudiant.user)
  etudiant: etudiantEntity;

  @OneToOne(() => employe_ambassadeEntity, (employe) => employe.user)
  employe: employe_ambassadeEntity;

  @OneToOne(() => ressortissantEntity, (ressortissant) => ressortissant.user)
  ressortissant: ressortissantEntity;
}
