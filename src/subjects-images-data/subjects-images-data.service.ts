import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgRep } from './imgRepo';

@Injectable()
export class SubjectsImagesDataService {

    constructor( @InjectRepository(ImgRep)
    private imgRepo: ImgRep){}

    async cardImgList() {
        return this.imgRepo.img()
    }

     getAllImeges(){
        return  this.imgRepo.getAllImeges()
    }
}
