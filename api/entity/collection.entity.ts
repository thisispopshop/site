import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne ,ManyToMany, OneToOne } from "typeorm";
import { Product, User, Category, Occasion } from ".";

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

  @OneToOne(type=>Occasion, occasion => occasion.collection)
  public occasion!: Occasion;

  @ManyToMany(type => Category, category => category.collections, {cascade:true})
  public categories!: Category[];

  @ManyToMany(type => Product, product => product.collections, {eager:true,cascade:true})
  @JoinTable()
  public products!: Product[];

}
