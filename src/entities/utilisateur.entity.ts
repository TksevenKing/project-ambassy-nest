import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class utilisateur{
    @PrimaryGeneratedColumn()
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
  
 
}

