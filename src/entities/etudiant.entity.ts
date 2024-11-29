import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class etudiant{
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