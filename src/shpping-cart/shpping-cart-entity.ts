import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { PrintSize } from "./print-size.enum";
import { PrintType } from "./print-type.enum";


@Entity()
export class ShppingCart extends BaseEntity{
    

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    email: string;
    
    @Column()
    imgId: number;

    @Column()
    numOfItems:number;

    @Column({nullable:true})
    printSize: PrintSize;

    @Column({nullable:true})
    printType: PrintType

}

