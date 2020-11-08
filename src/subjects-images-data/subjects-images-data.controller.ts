import { Controller, Get, Post } from '@nestjs/common';
import { SubjectsImagesDataService } from './subjects-images-data.service';

@Controller('pic-sub-main-page')
export class SubjectsImagesDataController {

    constructor(private subjectsImagesDataService: SubjectsImagesDataService){}

    @Post('img')
    uploudImg(){
        this.subjectsImagesDataService.cardImgList()
    }

    @Get('')
    getAllImeges(){
        console.log(this.subjectsImagesDataService.getAllImeges());
        
        return this.subjectsImagesDataService.getAllImeges()
    }
}
