import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forums')

export class forumEntity{
    @PrimaryGeneratedColumn()
    forum_id: string;

    @Column()
    titre: string;

    @CreateDateColumn()
    createdAt: Date;
}