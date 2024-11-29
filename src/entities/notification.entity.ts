import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class notification{
    @PrimaryGeneratedColumn()
    notification_id: number;

    @Column()
    objet: string;

    @CreateDateColumn()
    createdAt: Date;
}