import { Column, Entity, JoinColumn,  PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToMany } from "typeorm";
import { Image, Collection } from "."

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
  public merchantId!: number;

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

  @ManyToMany(type => Collection, collection => collection.products )
  public collections!: Collection[];

}
