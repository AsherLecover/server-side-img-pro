import { type } from 'os';
import { User } from 'src/auth/user.entity';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PrintSize } from './print-size.enum';
import { PrintType } from './print-type.enum';

@Entity()
export class ShppingCart  extends BaseEntity {
  //קבוצות
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(  () => User, user => user.email)
  @JoinColumn({name: 'user_id'})
  user: User;

  @ManyToOne( () => ImgListBySubject)
  @JoinColumn({name: 'img_id'})
  img: ImgListBySubject;

  @Column()
  numOfItems: number;

  @Column({ nullable: true })
  printSize: PrintSize;

  @Column({ nullable: true })
  printType: PrintType;

  @Column()
  img_id: number;

  @Column({ type: "character varying", nullable:true})
  user_id: number;
}

