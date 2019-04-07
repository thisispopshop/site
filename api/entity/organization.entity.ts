import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import {Event} from ".";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;   
  
  @Column()
  public subdomain!: string;

  @OneToMany(type=>Event, event => event.organization, {eager:true, cascade:true})
  public events! : Event[];

}