import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne , OneToMany } from "typeorm";
import { Product, User, Occasion, Organization} from ".";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;     //RUSHDAY

  @Column()
  public description!: string;

  @ManyToOne(type=>Occasion, occasion => occasion.event, {eager:true, cascade:true})
  public occasions! : Occasion[];

  @OneToMany(type => Organization, organization => organization.events)
  public organization!: Organization;
}