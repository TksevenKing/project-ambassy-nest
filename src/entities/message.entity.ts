import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('messages')

export class messageEntity{
    @PrimaryGeneratedColumn()
    message: number;

    @Column()
    contenu: string;

    @Column()
    date_envoi: Date;

    @Column()
    utilisateur_id: number;

    @Column()
    forum_id: number;
}