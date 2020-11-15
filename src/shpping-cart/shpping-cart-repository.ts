import { EntityRepository, Repository } from "typeorm";
import { ShppingCart } from "./shpping-cart-entity";


@EntityRepository(ShppingCart)
export class ShppingCartRepository extends Repository<ShppingCart> {


}