import { User } from "src/auth/user.entity";
import { ImgListBySubject } from "src/pic-main-list-subjects/img-list.entity";
import { EntityRepository, Repository } from "typeorm";
import { ShppingCartDto } from "./shpping-cart-DTO";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {
    
    
    async getUserBag(user_id: number) {
        const query = this.createQueryBuilder('shpping_cart')
        .leftJoinAndSelect(ImgListBySubject, 'imgListBySubject', 'shpping_cart.imgId = imgListBySubject.id')


        .where('user_id = :user_id', { user_id: user_id });
        const itemsInBag = await query.getMany();
        console.log('BAGYYYOOOOOOOWWWWWW:', itemsInBag);
        return itemsInBag;
  }

   


}