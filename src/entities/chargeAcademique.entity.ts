import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class charger_academique{
    @PrimaryGeneratedColumn()
    charger_academique_id: string;
}