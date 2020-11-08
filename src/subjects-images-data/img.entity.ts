import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';


@Entity()
export class cardImgList extends BaseEntity{

    @PrimaryGeneratedColumn()
    imgId: number;

    @Column()
    imgUrl: string;

    @Column()
    subject: string;

}