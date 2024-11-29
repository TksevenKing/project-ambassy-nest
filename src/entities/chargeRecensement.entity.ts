import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('charge_recesements')
export class charger_recensementEntity{
    @PrimaryGeneratedColumn()
    charger_recensement_id: string;
}