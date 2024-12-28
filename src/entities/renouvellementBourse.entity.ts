import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { etudiantEntity } from './etudiant.entity';

@Entity('renouvellements')
export class RenouvellementBourseEntity {

  @PrimaryGeneratedColumn({ name: 'renouvellement_id' })
  renouvellement_id: number;

  @CreateDateColumn()
  date_demande: Date;

  @Column({ default: 'nonTraiter' })
  status: string;

  @ManyToOne(() => etudiantEntity, etudiant => etudiant.renouvellements, { onDelete: 'CASCADE' })
  etudiant: etudiantEntity;

  @Column('simple-array') // Stocke les chemins des fichiers comme un tableau de chaînes
  documents: string[];
}
