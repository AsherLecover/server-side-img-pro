import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from './img-list-repository';

@Injectable()
export class PicMainListSubjectsService {

    constructor(
         @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository){}

    async CreateimgList() {
        return this.imgListRepository.CreateimgList()
    }

    getAllImegesBySubjectId(id){
        return  this.imgListRepository.getAllImegesBySubjectId(id)
    }
}
