import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employes')
export class employe_ambassadeEntity{
    @PrimaryGeneratedColumn()
    employe_id: number;

    @Column()
    matricule: string;

    @Column()
    fonction: string;
}