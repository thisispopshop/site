import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Product, User, Category, Occasion, Color, Brand } from ".";

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
  @JoinColumn()
  public occasion!: Occasion;
  
  @ManyToMany(type => Product, product => product.collections, {eager:true,cascade:true})
  @JoinTable()
  public products!: Product[];

  @ManyToMany(type => Category, category => category.collections, {eager:true, cascade:true})
  @JoinTable()
  public categories!: Category[];

  @ManyToMany(type => Brand, brand => brand.collections, {eager:true, cascade:true})
  @JoinTable()
  public brands! : Brand[];

  @ManyToMany(type => Color, color => color.collections, {eager:true, cascade:true})
  @JoinTable()
  public colors! : Color[];
}
