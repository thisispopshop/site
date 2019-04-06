import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Collection } from ".";

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

  @OneToOne(type => Collection, collection => collection.occasion, {eager:true})
  public  collection! : Collection;

}

  //@OneToOne(type => Category, category => category.Occassion, {eager:true, cascade:true})
  //public categories! : Category;

  
