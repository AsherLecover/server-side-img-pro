import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { Repository } from 'typeorm';
import { ImgRep } from './imgRepo';

@Injectable()
export class SubjectsImagesDataService {

    constructor(@InjectRepository(ImgRep)
    private imgRepo: ImgRep,
        @InjectRepository(ShppingCartRepository)
        private shppingCartRepository: ShppingCartRepository,
        @InjectRepository(ImgListRepository)
        private readonly imgListRepository: Repository<ImgListRepository>,
        @InjectRepository(UserRepository)
        private readonly userRepository: Repository<UserRepository>) { }

    async cardImgList() {
        return this.imgRepo.img()
    }

    getAllImeges() {
        return this.imgRepo.getAllImeges()
    }

    async getUserBag(user_id: number): Promise<any> {
        // const query1 = await this.imgListRepository.query(`
        //     SELECT *
        //     FROM shpping_cart as shp
        //     JOIN img_list_by_subject as imgs
        //     ON shp.img_id = imgs.id
        //     WHERE user_id = ${user_id}`);

        const query = await this.shppingCartRepository
            .createQueryBuilder()
            .where('ShppingCart.user_id = ' + user_id)
            .leftJoinAndMapOne(
                'ShppingCart.imgdata',
                'ImgListBySubject',
                'img',
                'ShppingCart.img_id = img.id',
            )
            .getMany();

        return await query;
    }
}