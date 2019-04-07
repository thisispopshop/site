import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, ManyToOne ,ManyToMany, OneToOne } from "typeorm";
import {Event} from ".";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;   
  
  @Column()
  public subdomain!: string;

  @ManyToOne(type=>Event, event => event.organization, {eager:true, cascade:true})
  public events! : Event[];

}