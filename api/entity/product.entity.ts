import { Column, Entity, JoinColumn,  PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { Image, Category, Collection, Color, Brand } from ".";

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

  @OneToMany(type => Image, image => image.product, {eager: true, cascade: ["insert", "remove"]})
  public images!: Image[];

  @ManyToMany(type => Collection, collection => collection.products )
  public collections!: Collection[];

  @ManyToOne(type => Category, category => category.products, {eager:true,cascade:["insert", "remove"]})
  public category!: Category;

  @ManyToOne(type => Brand, brand => brand.products, {eager:true,cascade:["insert", "remove"]})
  public brand!: Brand;

  @ManyToOne(type=>Color, color => color.products, {eager:true,cascade:["insert", "remove"]})
  public color!: Color;
}
