import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recensements')
export class recensementEntity{
    @PrimaryGeneratedColumn({name: 'recensement_id'})
    recensement_id: number;

    @Column()
    nom: string;
  
    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column()
    telephone: string;
   
    @Column()
    sexe: string;
    
    @CreateDateColumn()
    date_naissance: Date;

    @Column()
    lieu_naissance: string;

    @Column()
    nationalite: string;

    @Column()
    passeport_num: string;

    @CreateDateColumn()
    passeport_expiration: Date;

    @Column()
    adresse: string;

    @Column()
    statut_residant: string;

    @Column()  //{type: "enum", enum: ["etudiant", "travailleur", "demander Asile", "tourist"]}
    categorie: string;

    @Column()
    employeur_universite: string;

    @Column()
    etat_civil: string;

    @Column({type: 'int'})
    nombre_enfant: number;

    @Column()
    numero_consulaire: string;

}