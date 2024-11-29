import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class charger_recensement{
    @PrimaryGeneratedColumn()
    charger_recensement_id: string;
}