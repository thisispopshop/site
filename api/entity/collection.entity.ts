import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne ,ManyToMany } from "typeorm";
import { Product, User } from ".";

export enum CollectionStatus {
  APPROVED = "approved",
  UNAPPROVED = "unapproved",
  CANCELED = "canceled",
}
@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public status!: string;

  @Column()
  public approvedBy! : number;

  @Column()
  public description!: string;

  @ManyToMany(type => Product, product => product.collections, {eager:true,cascade:true})
  @JoinTable()
  public products!: Product[];

}
