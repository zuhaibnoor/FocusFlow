import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

