import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SubjectsImagesDataService } from './subjects-images-data.service';
import { Request } from 'express';


@Controller('pic-sub-main-page')
export class SubjectsImagesDataController {

    constructor(private subjectsImagesDataService: SubjectsImagesDataService) { }

    @Post('img')
    uploudImg() {
        this.subjectsImagesDataService.cardImgList()
    }
    @Get('')
    getAllImeges() {
        
       return this.subjectsImagesDataService.getAllImeges()
    }
    @Post()
    getUserBag(
        @Req() req: Request
    ) {

           return this.subjectsImagesDataService.getUserBag(req.body.user_id)
    }
}