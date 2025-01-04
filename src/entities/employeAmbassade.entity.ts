import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
@Entity('employes')
export class employe_ambassadeEntity{
    @PrimaryGeneratedColumn({name: 'employe_id'})
    employe_id: number;

    @OneToOne(type => User, user => user.employe)
    @JoinColumn()
    user: User;

    @Column()
    matricule: string;

    @Column()  //{type: "enum", enum: ["charge_academique","charge_recensement","secretaire"], default: "charge_academique"}
    fonction: string;

}