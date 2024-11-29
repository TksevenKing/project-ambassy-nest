import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class secretaire{
    @PrimaryGeneratedColumn()
    secretaire_id: number;
}