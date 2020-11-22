import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';

@Injectable()
export class ManagementService {
  constructor(
    @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository,
  ) {}

  async getAllImegesBySubjectId(subId) {
    const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

    query.where('img_list_by_subject.subId = :subId', { subId: subId });
    const images = await query.getMany();
    return images  }
}
