import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Collection, Event, Category } from ".";

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
  public collection! : Collection;

  @ManyToOne(type=>Event, event=>event.occasions)
  public event!: Event;

}

  
