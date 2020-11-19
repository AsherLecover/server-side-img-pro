import { User } from "src/auth/user.entity";
import { ImgListBySubject } from "src/pic-main-list-subjects/img-list.entity";
import { EntityRepository, Repository } from "typeorm";
import { ShppingCartDto } from "./shpping-cart-DTO";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {

  async deleteImgFromBag(userId: number, imgId: number) {
    console.log('imgid from repo', imgId);
    
     return await this.delete(+imgId)
  }
    
    
}