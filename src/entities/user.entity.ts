import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { etudiantEntity } from './etudiant.entity';
import { ressortissantEntity } from './ressortissant.entity';


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
  type: 'student' | 'ressortissant';

  @OneToOne(() => etudiantEntity, (etudiant) => etudiant.user)
  etudiant: etudiantEntity;

  @OneToOne(() => ressortissantEntity, (ressortissant) => ressortissant.user)
  ressortissant: ressortissantEntity;
}
