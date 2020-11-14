import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImgDetailsService {

    constructor( @InjectRepository(ImgListBySubject)
    private readonly userRepository: Repository<ImgListBySubject>,){}

    async getImg(subId: number, imgId) {
      
      
        const query = this.userRepository.createQueryBuilder('img_list_by_subject');

        query.where('img_list_by_subject.subId = :subId', { subId: subId })
        .andWhere('img_list_by_subject.imgId = :imgId', { imgId: imgId });

        const img = await query.getOne();
        return img

    }

}
