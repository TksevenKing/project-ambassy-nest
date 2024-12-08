import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RenouvellementBourseEntity } from "./renouvellementBourse.entity";


@Entity('etudiants')

export class etudiantEntity{
    @PrimaryGeneratedColumn({name: 'etudiant_id'})
    etudiant_id: number;
   
    @Column()
    nom: string;
  
    @Column()
    prenom: string;

    @Column()
    email: string;
    
    @Column()
    motDePasse: string;

    @Column()
    telephone: string;

    @Column()
    universite: string;

    @Column()
    filiere: string;
    
    @Column()
    niveau_etude: string;

    @Column()
    annee_bac: string;

    @Column({type: 'tinyint', default: 1})
    bourseActive: number;
    
    @Column()
    sexe: string;

    @Column()
    numero_passeport: string;

    @Column()
    ville: string;

    @Column()
    numero_consulaire: string;

    @OneToMany(type => RenouvellementBourseEntity, renouvellement => renouvellement.etudiant)
    renouvellements: RenouvellementBourseEntity[];
}