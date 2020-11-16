import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { Repository } from 'typeorm';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartRepository } from './shpping-cart-repository';

@Injectable()
export class ShppingCartService {
    imgInBag: ShppingCartDto[]
    userEmail: string


    constructor(
        @InjectRepository(ShppingCartRepository)
        private userRepository: ShppingCartRepository,
        @InjectRepository(ImgListRepository)
        private readonly imgListRepository: Repository<ImgListRepository>
    ) { }

    async addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
        return await this.userRepository.addImgToBag(shppingCartDto)
    }

    async getUserBag(email: string): Promise<ShppingCartDto[]> {
        return await this.userRepository.getUserBag(email)
    }


    async getImgDetils(imgId) {
        const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');
        query.where('img_list_by_subject.id = :imgId:', { imgId: imgId })
        const imgs = await query.getMany();
        return imgs

    }

}

