import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employes')
export class employe_ambassadeEntity{
    @PrimaryGeneratedColumn({name: 'employe_id'})
    employe_id: number;

    @Column()
    matricule: string;

    @Column()
    fonction: string;
}