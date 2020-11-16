import { EntityRepository, Repository } from "typeorm";
import { ShppingCartDto } from "./shpping-cart-DTO";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {
 

    async addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
        // console.log('shpping from repo: ', shppingCartDto);

        const img = new ShppingCart()
        for (const i of shppingCartDto) {
            img.imgId = i.imgId;
            img.email = i.email;
            img.numOfItems = i.numOfItems;
            img.printType = i.printType;
            img.printSize = i.printSize;
           await img.save()
           console.log(i.printSize);
           
        }
        // console.log('img from repository: ', img);
        
    }

   async getUserBag(email: string) {
        const query = this.createQueryBuilder('shpping_cart');
    
        query.where('email = :email', { email: email });
        const itemsInBag = await query.getMany();
        // console.log('BAGYYYOOOOOOOWWWWWW:', itemsInBag);
        return itemsInBag;
    }


}