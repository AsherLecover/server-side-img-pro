import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartRepository } from './shpping-cart-repository';

@Injectable()
export class ShppingCartService {
    constructor(
        @InjectRepository(ShppingCartRepository)
    private userRepository: ShppingCartRepository,
    ){}

    addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
        // console.log('shpping from service: ', shppingCartDto);
        return  this.userRepository.addImgToBag(shppingCartDto)
    }

    getShppintBagOfClinet(token:string){

    }
}
