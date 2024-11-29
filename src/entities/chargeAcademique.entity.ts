import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('charge_academiques')
export class charger_academiqueEntity{
    @PrimaryGeneratedColumn()
    charger_academique_id: string;
}