import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { ShppingCartDto } from "./shpping-cart-DTO";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {
    
    
 



   async getUserBag(email: string) {
       return null
    // const itemsInBag = await this.createQueryBuilder("shpping_cart")
    // .leftJoinAndSelect("shpping_cart.imgId", "img_list_by_subject")
    // .where('email = :email', { email: email })
    // .getMany();

        // const query = this.createQueryBuilder('shpping_cart');
    
        // query.where('email = :email', { email: email }).leftJoin();
        // const itemsInBag = await query.getMany();
        // // console.log('BAGYYYOOOOOOOWWWWWW:', itemsInBag);
        // return itemsInBag;
    }

   


}