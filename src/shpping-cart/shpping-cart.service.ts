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

    async addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
        return await this.userRepository.addImgToBag(shppingCartDto)
    }

    getUserBag(email: string) {
       return this.userRepository.getUserBag(email)
    }

 
}
