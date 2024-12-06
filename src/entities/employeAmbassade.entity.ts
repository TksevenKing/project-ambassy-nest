import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employes')
export class employe_ambassadeEntity{
    @PrimaryGeneratedColumn({name: 'employe_id'})
    employe_id: number;

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
    matricule: string;

    @Column({type: "enum", enum: ["charge_academique","charge_recensement","secretaire"], default: "charge_academique"})
    fonction: string;
}