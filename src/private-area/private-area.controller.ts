import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { PrivateAreaService } from './private-area.service';
import { Request } from 'express';

@Controller('private-area')
export class PrivateAreaController {
  constructor(private privateAreaService: PrivateAreaService) {}

  @Post('')
  getAllImegesByUserId(@Req() request: Request) {
    console.log('private area body: ', request);
    return this.privateAreaService.getAllImegesByUserId(request.body.id);
  }

  @Get('/:id')
  getAllSubjectImgesById(@Param('id') params: Request) {
    console.log('params: ', params);
    return this.privateAreaService.getAllSubjectImgesById(params);
  }

  @Post('/:id')
  addImg(
    @Param('id') params: Request,
    @Body('imgDataToAdd') imgDataToAdd,
  ) {
    console.log('params:', params);
    
    console.log('imgDataToAdd', imgDataToAdd);

    return this.privateAreaService.addImg(imgDataToAdd,params);
  }

  @Delete('/:id')
  deleteImg(
    @Param('id') params: Request,
     @Req() request: Request) {
       console.log('params::::', params);
       
   return this.privateAreaService.deleteImg(params);
  }
}
