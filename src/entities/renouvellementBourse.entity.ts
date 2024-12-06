import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('renouvellements')
export class RenouvellementBourseEntity{
    @PrimaryGeneratedColumn({name: 'renouvellement_id'})
    renouvellement_id: number;

    @CreateDateColumn()
    date_demande: Date;

    @Column()
    statut: string;

    @Column()
    etudiant_id: number;
}