import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class employe_ambassade{
    @PrimaryGeneratedColumn()
    employe_id: number;

    @Column()
    matricule: string;

    @Column()
    fonction: string;
}