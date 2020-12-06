import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { PassThrough } from 'stream';

@Injectable()
export class PrivateAreaService {
 
  constructor(
    @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository,
  ) {}

  async getAllSubjectImgesById(subId){
    const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

    query.where('img_list_by_subject.subId = :subId', { subId: subId });
    const images = await query.getMany();
    return images;

  }

  async getAllImegesByUserId(ownerId: number) {
    const query = this.imgListRepository.createQueryBuilder(
      'img_list_by_subject',
    );

    query.where('img_list_by_subject.ownerId = :ownerId', { ownerId: ownerId });
    const images = await query.getMany();
    return images;
  }

  async addImg(imgDataToAdd, ownerId) {
    await this.imgListRepository.save(imgDataToAdd);
    return this.getAllImegesByUserId(ownerId);
  }

  async deleteImg(imgId, userId){

    await this.imgListRepository.delete(imgId)
    return this.getAllImegesByUserId(userId)
  }
  async editImgDetails(id: number, img: any, userId) {
    await this.imgListRepository.update({ id }, img);
    return this.getAllImegesByUserId(userId);  }
}
