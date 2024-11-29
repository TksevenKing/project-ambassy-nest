import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('etudiants')

export class etudiantEntity{
    @PrimaryGeneratedColumn()
    etudiant_id: number;

    @Column()
    universite: string;

    @Column()
    filiere: string;

    @Column()
    annee_bac: string;

    @Column()
    bourseActive: boolean;
}