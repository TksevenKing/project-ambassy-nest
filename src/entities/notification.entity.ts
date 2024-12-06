import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notifications')
export class notificationEntity {
    @PrimaryGeneratedColumn()
    notification_id: number;

    @Column({ default: "secretaire@gmail.com" })
    sender_email: string;

    @Column()
    receiver_email: string;

    @Column()
    objet: string;

    @Column({ type: 'text' })
    contenu: string;

    @CreateDateColumn()
    createdAt: Date;
}