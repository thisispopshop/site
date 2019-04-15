import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Organization } from ".";

@Entity()
export class OrgImage {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public url!: string;

    @ManyToOne(type=>Organization, organization => organization.images, {onDelete: "CASCADE"})
    public organization!: Organization;
    
}