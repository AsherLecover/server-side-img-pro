import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class ImgListBySubject extends BaseEntity{
    

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ownerId: number;

    @Column()
    imagesSubject: string;
    
    @Column()
    subId: number;

    @Column()
    img_id: number;

    @Column()
    numOfItems:number;

    @Column()
    photographer:string;

    @Column()
    imgDes:string;

    @Column()
    price:number;

    @Column()
    imgLongDes:string;

    @Column()
    imgUrl:string;



}

