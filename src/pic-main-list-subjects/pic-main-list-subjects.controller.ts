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
     getAllImeges(
        @Param('id', ParseIntPipe) id: number,
     ){
         console.log('ENV', typeof process.env.PASS);
         console.log(124141412);
         
         return this.picMainListSubjectsService.getAllImegesBySubjectId(id)
    }

    
}





