import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { utilisateurEntity } from "./utilisateur.entity";

@Entity('etudiants')

export class etudiantEntity{
    @PrimaryGeneratedColumn({name: 'etudiant_id'})
    etudiant_id: number;

    @Column()
    universite: string;

    @Column()
    filiere: string;

    @Column()
    annee_bac: string;

    @Column({type: 'tinyint'})
    bourseActive: number;

    @OneToOne(type => utilisateurEntity, utilisateur => utilisateur.etudiant)
    @JoinColumn({name: 'utilisateur_id'})   // on met @JoinColumn du cote de la fille (dans les relations @OneTOne)
    utilisateur: utilisateurEntity;
}