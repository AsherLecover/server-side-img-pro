import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { PrivateAreaService } from './private-area.service';
import { Request } from 'express';


@Controller('private-area')
export class PrivateAreaController {

    constructor(private privateAreaService: PrivateAreaService){}

    @Post('/:id')
  getAllImeges(
    @Req() request: Request,
    @Param('id') params: Request,
  ) {
      console.log('private area body: ', request.body.id);
      console.log('private area params: ', params);
   return this.privateAreaService.getAllImegesBySubjectId(params,request.body.id);
  }

  
  @Post('')
  addImg(
      @Body('imgDataToAdd') imgDataToAdd) {
    
    console.log('aronnnnnnnnnnn', imgDataToAdd);
    
     return this.privateAreaService.addImg(imgDataToAdd);
  }
}
