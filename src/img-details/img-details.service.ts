import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
import { ShppingCartDto } from 'src/shpping-cart/shpping-cart-DTO';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { Repository } from 'typeorm';

@Injectable()
export class ImgDetailsService {

     constructor( 
        @InjectRepository(ImgListRepository)
        private readonly imgListRepository: Repository<ImgListRepository>

   
    ){}

     async getImg(subId: number, img_id) {
         
    
        const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

        query.where('img_list_by_subject.subId = :subId', { subId: subId })
        .andWhere('img_list_by_subject.img_id = :img_id', { img_id: img_id });

        const img = await query.getOne();
        return img

    }

}
