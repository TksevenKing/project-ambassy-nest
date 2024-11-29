import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class rendez_vous{
    @PrimaryGeneratedColumn()
    rdv_id: number;

    @Column()
    objet: string;

    @Column()
    date_rdv: Date;

    @Column()
    heure: string;

    @Column()
    utilisateur_id: number;
}