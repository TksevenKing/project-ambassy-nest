import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ressortissants')
export class ressortissantEntity{
    @PrimaryGeneratedColumn({name: 'ressortissant_id'})
    ressortissant_id: number;

    @Column()
    utilisateur_id: number;

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

    @Column()
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