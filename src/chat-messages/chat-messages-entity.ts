// import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
// import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
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


@Entity()
export class ChatMessages extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sender_id: string;

  @Column()
  resiver_id: string;

  @Column()
  message_text: string;

  @Column()
  time: string;


}

