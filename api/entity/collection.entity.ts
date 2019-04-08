import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Product, User, Category, Occasion, Color } from ".";

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

  @OneToMany(type => Category, category => category.collections, {eager:true, cascade:true})
  public categories!: Category[];

  @OneToOne(type=>Occasion, occasion => occasion.collection)
  @JoinColumn()
  public occasion!: Occasion;
  
  @ManyToMany(type => Product, product => product.collections, {eager:true,cascade:true})
  @JoinTable()
  public products!: Product[];

  @ManyToMany(type => Color, color => color.collections)
  @JoinTable()
  public colors! : Color[];

}
