import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne ,ManyToMany, OneToOne } from "typeorm";
import { Product, User, Collection } from ".";

export enum RushDay {
  HOUSETOURS = "House Tours",
  SISTERHOOD = "Sisterhood",
  PHILANTHROPY = "Philanthropy",
  PREFERENCE = "Preference",
}

@Entity()
export class Occasion {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;     //RUSHDAY

  @Column()
  public description!: string;

  @Column()
  public submitForm!: string;

  @OneToOne(type => Collection, collection => collection.occasion)
  public  collection! : Collection;

}

  //@OneToOne(type => Category, category => category.Occassion, {eager:true, cascade:true})
  //public categories! : Category;

  
