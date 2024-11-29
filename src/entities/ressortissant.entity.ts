import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ressortissant{
    @PrimaryGeneratedColumn()
    ressortissant_id: number;

    @Column()
    utilisateur_id: number;

    @Column()
    sexe: string;
    
    @Column()
    date_naissance: Date;

    @Column()
    lieu_naissance: string;

    @Column()
    nationalite: string;

    @Column()
    passeport_num: string;

    @Column()
    passeport_expiration: string;

    @Column()
    adresse: string;

    @Column()
    statut_residant: string;

    @Column()
    categorie: string;

    @Column()
    employeur_universite: string;

    @Column()
    etat_civil: string;

    @Column()
    nombre_enfant: string;

    @Column()
    numero_consulaire: string;

}