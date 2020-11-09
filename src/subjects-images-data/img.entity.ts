import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class cardImgList extends BaseEntity{

    @PrimaryGeneratedColumn()
    // @Column()
    imgId: number;

    @Column()
    imgUrl: string;

    @Column()
    subject: string;

}