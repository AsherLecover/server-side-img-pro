import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ImgListBySubject } from "src/pic-main-list-subjects/img-list.entity";
import { ShppingCart } from "src/shpping-cart/shpping-cart-entity";
import { role } from "./auth-role.enum";


@Entity()
@Unique(['email'])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imgProfile: string = "https://www.w3schools.com/w3images/avatar2.png";

    @Column({nullable: true})
    profession:string;

    
    @Column({nullable: true})
    instagram_link:string;

    
    @Column({nullable: true})
    facebook_link:string;

    
    @Column({nullable: true})
    linkedin_link:string;

    
    @Column({nullable: true})
    twitter_link:string;

    @Column()
    role: role;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany( () => ShppingCart, shippingCart => shippingCart.user_id)
    img:ImgListBySubject[]
    // 'shpping_cart', 'email')

    async validatePassword(password: string): Promise<boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }

}