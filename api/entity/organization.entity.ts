import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinTable } from "typeorm";
import {Event, OrgImage} from ".";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;   
  
  @Column()
  public subdomain!: string;

  @OneToMany(type=>OrgImage, orgimage => orgimage.organization, {eager:true, cascade:true})
  public images!: OrgImage[];

  @OneToMany(type=>Event, event => event.organization, {eager:true, cascade:true})
  public events! : Event[];

}
