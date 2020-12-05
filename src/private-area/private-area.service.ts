import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';

@Injectable()
export class PrivateAreaService {

    constructor(
        @InjectRepository(ImgListRepository)
        private imgListRepository: ImgListRepository,
    ) { }

    async getAllImegesByUserId(ownerId: number) {
 const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

    query.where('img_list_by_subject.ownerId = :ownerId',{ ownerId: ownerId });
    const images = await query.getMany();
    return images;  
  }

  async addImg(imgDataToAdd) {

    // await this.imgListRepository.save(imgDataToAdd);
    // return this.getAllImegesBySubjectId(imgDataToAdd.subId, 2);
  }
}


