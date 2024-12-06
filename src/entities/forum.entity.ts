import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('forums')

export class forumEntity{
    @PrimaryGeneratedColumn({name: 'forum_id'})
    forum_id: number;

    @Column()
    titre: string;

    @CreateDateColumn()
    createdAt: Date;
}