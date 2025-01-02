import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RenouvellementBourseEntity } from "./renouvellementBourse.entity";
import { User } from "./user.entity";


@Entity('etudiants')

export class etudiantEntity {
    @PrimaryGeneratedColumn({ name: 'etudiant_id' })
    etudiant_id: number;

    @OneToOne(type => User, user => user.etudiant)
    @JoinColumn()
    user: User;

    @Column()
    universite: string;

    @Column()
    filiere: string;

    @Column()
    niveau_etude: string;

    @Column()
    annee_bac: string;

    @Column({ type: 'tinyint', default: 1 })
    bourseActive: number;

    @Column()
    sexe: string;

    @Column({unique: true})
    numero_passeport: string;

    @Column()
    ville: string;

    @Column({unique: true})
    numero_consulaire: string;

    @OneToMany(type => RenouvellementBourseEntity, renouvellement => renouvellement.etudiant)
    renouvellements: RenouvellementBourseEntity[];


}