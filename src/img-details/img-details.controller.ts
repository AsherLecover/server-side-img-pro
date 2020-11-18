import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ImgDetailsService } from './img-details.service';

@Controller('img-details')
export class ImgDetailsController {

    constructor(private imgDetailsService: ImgDetailsService){}

    @Get('/:subId/:img_id')
    getImg(
        @Param('subId',ParseIntPipe) subId: number,
         @Param('img_id',ParseIntPipe) img_id: number
         ){
        return this.imgDetailsService.getImg(subId, img_id)

    }

 
}
