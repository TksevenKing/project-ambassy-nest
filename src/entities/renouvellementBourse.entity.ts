import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('renouvellements')
export class RenouvellementBourseEntity{
    @PrimaryGeneratedColumn()
    renouvellement_id: string;

    @CreateDateColumn()
    date_demande: Date;

    @Column()
    statut: string;

    @Column()
    etudiant_id: number;
}