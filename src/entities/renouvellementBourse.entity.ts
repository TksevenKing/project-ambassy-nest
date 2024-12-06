import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { etudiantEntity } from "./etudiant.entity";

@Entity('renouvellements')
export class RenouvellementBourseEntity{
    @PrimaryGeneratedColumn({name: 'renouvellement_id'})
    renouvellement_id: number;

    @CreateDateColumn()
    date_demande: Date;

    @Column({type: "enum", enum: ["enCours", "traiter", "nonTraiter"], default:"nonTraiter"})
    statut: string;

    @Column()
    etudiant_id: number;

    @ManyToOne(type => etudiantEntity, etudiant => etudiant.renouvellements)
    etudiant: etudiantEntity;
}