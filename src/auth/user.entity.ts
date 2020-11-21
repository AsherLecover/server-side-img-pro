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