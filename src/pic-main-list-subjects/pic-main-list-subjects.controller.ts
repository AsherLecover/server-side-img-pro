import { Controller, Get, Param, ParseIntPipe, Post, Req, Res, UseGuards } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { join } from 'path';



@Controller('pic-main-list-subjects')
export class PicMainListSubjectsController {
    
    constructor(private picMainListSubjectsService: PicMainListSubjectsService){}
    
    @Post('img')
    uploudImg(){
        this.picMainListSubjectsService.CreateimgList()
    }

    @Get('get-main-img/:img')
    getfile(
      @Res() res:any,
      @Param('img') img ){
        'localhost:3000/pic-main-list-subjects/get-main-img/orbani-main'
       
          return res.sendFile(join(process.cwd(),`uploads/main-subject-img/${img}.jpg`))
     
        

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





