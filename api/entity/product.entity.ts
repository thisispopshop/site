import { Column, Entity, JoinColumn,  PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToMany, OneToOne } from "typeorm";
import { Image, Category, Collection, Color } from ".";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public merchant!: string;

  @Column({type: "double"})
  public price!: number;

  @Column()
  public url!: string;

  @Column()
  public description!: string;

  @OneToMany(type=>Color, color => color.products)
  public color!: Color;

  @OneToMany(type => Image, image => image.product, {eager: true, cascade: ["insert", "remove"]})
  public images!: Image[];

  @OneToMany(type => Category, category => category.products)
  public category!: Category;

  @ManyToMany(type => Collection, collection => collection.products )
  public collections!: Collection[];

}
