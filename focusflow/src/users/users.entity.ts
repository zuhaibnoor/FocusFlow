import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { note } from '../notes/note.entity'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(()=>note, note => note.user)
    notes: note[]

}
