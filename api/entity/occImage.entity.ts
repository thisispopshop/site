import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Occasion } from ".";

@Entity()
export class OccImage {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public url!: string;

    @ManyToOne(type=>Occasion, occasion => occasion.images, {onDelete: "CASCADE"})
    public occasion!: Occasion;
}