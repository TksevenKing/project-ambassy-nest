import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class message{
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