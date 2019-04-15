import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Collection, Event, Category, OccImage } from ".";

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

  @OneToMany(type=>OccImage, occimage => occimage.occasion, {eager:true, cascade:true})
  public images!: OccImage[];

  @OneToOne(type => Collection, collection => collection.occasion, {eager:true})
  public collection! : Collection;

  @ManyToOne(type=>Event, event=>event.occasions)
  public event!: Event;

}