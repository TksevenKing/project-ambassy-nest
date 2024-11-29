import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { utilisateurEntity } from "./utilisateur.entity";

@Entity('rendez_vous')

export class rendez_vousEntity{
    @PrimaryGeneratedColumn()
    rdv_id: number;

    @Column()
    objet: string;

    @Column()
    date_rdv: Date;

    @Column()
    heure: string;

    @ManyToOne(type => utilisateurEntity, utilisateur => utilisateur.rendez_voust)
    utilisateurs: utilisateurEntity;
}