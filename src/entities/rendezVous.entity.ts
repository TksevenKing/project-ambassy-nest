import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('rendez_vous')

export class rendez_vousEntity{
    @PrimaryGeneratedColumn({name: 'rdv_id'}) // Pour prendre un vous devez vous recenser aupres de l'ambassade
    rdv_id: number;

    @Column()
    nom: string;
  
    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    objet: string;

    @CreateDateColumn()
    date_rdv: Date;

    @Column()
    heure: string;

}