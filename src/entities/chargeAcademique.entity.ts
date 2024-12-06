import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('charge_academiques')
export class charger_academiqueEntity{
    @PrimaryGeneratedColumn({name: 'charger_a_id'})
    charger_a_id: number;
}