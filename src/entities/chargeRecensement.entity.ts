import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('charge_recesements')
export class charger_recensementEntity{
    @PrimaryGeneratedColumn({name: 'charger_r_id'})
    charger_r_id: number;
}