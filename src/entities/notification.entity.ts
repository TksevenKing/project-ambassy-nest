import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notifications')
export class notificationEntity{
    @PrimaryGeneratedColumn()
    notification_id: number;

    @Column()
    objet: string;

    @CreateDateColumn()
    createdAt: Date;
}