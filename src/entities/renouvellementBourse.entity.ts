import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RenouvellementBourse{
    @PrimaryGeneratedColumn()
    renouvellement_id: string;

    @Column()
    date_demande: Date;

    @Column()
    statut: string;

    @Column()
    etudiant_id: number;
}