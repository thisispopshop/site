import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { Product, Collection } from ".";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @OneToMany(type => Product, product => product.category)
  public products!: Product[];

  @ManyToMany(type => Collection, collection => collection.categories)
  public collections!: Collection[];


}
