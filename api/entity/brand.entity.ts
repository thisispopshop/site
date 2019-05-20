import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Product, Collection } from ".";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @OneToMany(type => Product, product => product.brand)
  public products!: Product[];

  @ManyToMany(type => Collection, collection => collection.brands)
  public collections!: Collection[];

}
