import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { Repository } from 'typeorm';

@Injectable()
export class ImgHomeLivingRoomService {

    constructor( 
        @InjectRepository(ImgListRepository)
        private readonly imgListRepository: Repository<ImgListRepository>
    ){}


  async  getAllImg() {

        const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');
        const imgList = await query.getMany();
        return imgList
    }
}
