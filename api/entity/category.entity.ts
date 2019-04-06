import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Product, Collection } from ".";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @OneToMany(type => Product, product => product.category, {cascade:true})
  public products!: Product[];

  @ManyToOne(type => Collection, collection => collection.categories)
  public collections!: Collection[];

}
