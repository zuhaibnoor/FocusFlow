import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity()
export class note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({ default: false })
    isCompleted: boolean;

    @ManyToOne(()=>User, user => user.notes)
    user: User;

}

