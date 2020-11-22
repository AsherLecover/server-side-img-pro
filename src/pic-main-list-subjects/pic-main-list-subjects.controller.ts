import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';



@Controller('pic-main-list-subjects')
export class PicMainListSubjectsController {
    
    constructor(private picMainListSubjectsService: PicMainListSubjectsService){}
    
    @Post('img')
    uploudImg(){
        this.picMainListSubjectsService.CreateimgList()
    }
    
    @Get('/:id')
    //  @UseGuards(AuthGuard())
     getAllImeges(
        @Req() request: Request,
        @Param('id', ParseIntPipe) id: number,
     ){
         console.log('all images main list');
         return this.picMainListSubjectsService.getAllImegesBySubjectId(id)
    }

    
}





