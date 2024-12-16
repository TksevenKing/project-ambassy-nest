import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('ressortissants')
export class ressortissantEntity{
    @PrimaryGeneratedColumn({name: 'ressortissant_id'})
    ressortissant_id: number;
   
    @OneToOne(type => User, user => user.ressortissant)
    @JoinColumn()
    user: User;

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