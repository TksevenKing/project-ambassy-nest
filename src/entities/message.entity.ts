import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('messages')

export class messageEntity{
    @PrimaryGeneratedColumn({name: 'message_id'})
    message_id: number;

    @Column({type: 'text'})
    contenu: string;

    @CreateDateColumn()
    date_envoi: Date;

    @Column()
    utilisateur_id: number;

    @Column()
    forum_id: number;
}