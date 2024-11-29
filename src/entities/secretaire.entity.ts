import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('secretaires')

export class secretaireEntity{
    @PrimaryGeneratedColumn()
    secretaire_id: number;
}