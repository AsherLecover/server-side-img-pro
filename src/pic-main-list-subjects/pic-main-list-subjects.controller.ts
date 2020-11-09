import { Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
// import { SubjectsImagesDataService } from './subjects-images-data.service';
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
        console.log('param: ',id);
        
        return  this.picMainListSubjectsService.getAllImegesBySubjectId(id)
    }

    
}





