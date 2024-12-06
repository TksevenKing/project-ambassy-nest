import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('secretaires')

export class secretaireEntity {
    @PrimaryGeneratedColumn({ name: 'secretaire_id' })
    secretaire_id: number;
}