import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { utilisateurEntity } from "./utilisateur.entity";

@Entity('rendez_vous')

export class rendez_vousEntity{
    @PrimaryGeneratedColumn({name: 'rdv_id'})
    rdv_id: number;

    @Column()
    objet: string;

    @CreateDateColumn()
    date_rdv: Date;

    @Column()
    heure: string;

    @ManyToOne(type => utilisateurEntity, utilisateur => utilisateur.rendez_vous)
    utilisateurs: utilisateurEntity;
}