import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class forum{
    @PrimaryGeneratedColumn()
    forum_id: string;

    @Column()
    titre: string;

    @CreateDateColumn()
    createdAt: Date;
}