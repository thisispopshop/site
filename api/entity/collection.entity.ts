import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Product, User } from ".";

//enum status: Approved | Unapproved

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @ManyToOne(type => Product, product => product.collections, { eager: true })
  public product!: Product;

  @Column()
  public status!: string;

  @Column()
  public approvedBy! : number;

  @Column()
  public description!: string;

}
