import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Product } from ".";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public url!: string;

  @ManyToOne(type => Product, product => product.images, {onDelete: "CASCADE"})
  public product!: Product;

}