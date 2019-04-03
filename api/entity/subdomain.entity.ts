import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne ,ManyToMany, OneToOne } from "typeorm";
import { Product, User } from ".";

@Entity()
export class Subdomain {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;     //RUSHDAY

}