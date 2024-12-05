import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { rendez_vousEntity } from "./rendezVous.entity";

@Entity('utilisateurs')
export class utilisateurEntity{
    @PrimaryGeneratedColumn({name: 'user_id'})
    utilisateur_id: number;
  
    @Column()
    nom: string;
  
    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    role: string

    @OneToMany(type => rendez_vousEntity, rendez_vous => rendez_vous.utilisateurs)
    rendez_vous: rendez_vousEntity[];


  
 
}

