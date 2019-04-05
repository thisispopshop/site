import { Column, Entity, JoinColumn,  PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToMany, OneToOne } from "typeorm";
import { Image, Category, Collection } from "."

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public brand!: string;

  @Column({type: "double"})
  public price!: number;

  @Column()
  public stock!: number;

  @Column()
  public merchant!: string;

  @Column()
  public givenId!: number;

  @Column()
  public url!: string;

  @Column()
  public originalUrl!: string;

  @Column()
  public dateCreated!: Date;

  @Column()
  public description!: string;

  @OneToMany(type => Image, image => image.product, {eager: true, cascade: ["insert", "remove"]})
  public images!: Image[];

  @OneToMany(type => Category, category => category.products)
  public category!: Category;

  @ManyToMany(type => Collection, collection => collection.products )
  public collections!: Collection[];

}
