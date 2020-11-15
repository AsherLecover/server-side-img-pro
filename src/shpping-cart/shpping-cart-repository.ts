import { EntityRepository, Repository } from "typeorm";
import { ShppingCartDto } from "./shpping-cart-DTO";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {

    async addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
        const img = new ShppingCart()
        for (const i of shppingCartDto) {
            img.imgId = i.imgId;
            img.userEmail = i.userEmail;
            img.numOfItems = i.numOfItems;
            img.printType = i.printType;
            img.printSize = i.printSize;
           await img.save()
           console.log(i.printSize);
           
        }
        // console.log('img from repository: ', img);
        
    }


}