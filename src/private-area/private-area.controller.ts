import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { PrivateAreaService } from './private-area.service';
import { Request } from 'express';


@Controller('private-area')
export class PrivateAreaController {

    constructor(private privateAreaService: PrivateAreaService){}

    @Post('')
  getAllImegesByUserId(
    @Req() request: Request,
  ) {
      console.log('private area body: ', request);
   return this.privateAreaService.getAllImegesByUserId(request.body.id);
  }

  
  // @Post('')
  // addImg(
  //     @Body('imgDataToAdd') imgDataToAdd) {
    
  //   console.log('aronnnnnnnnnnn', imgDataToAdd);
    
  //    return this.privateAreaService.addImg(imgDataToAdd);
  // }
}
