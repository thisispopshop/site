import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Product} from ".";

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

 // @ManyToMany(type => Product, product => product.size, {cascade:true})
  //public products!: Product[];

  // @ManyToMany(type => Collection, collection => collection.size, {cascade:true})
  //public categories!: Category[]

}
