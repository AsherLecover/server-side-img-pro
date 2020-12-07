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
  sender_id: number;

  @Column()
  resiver_id: number;

  @Column()
  message_text: string;


}

