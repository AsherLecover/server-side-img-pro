import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
        console.log('dddd: ', this.subjectsImagesDataService.getAllImeges());
        
        return  this.subjectsImagesDataService.getAllImeges()
    }
}
