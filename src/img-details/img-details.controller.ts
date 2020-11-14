import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ImgDetailsService } from './img-details.service';

@Controller('img-details')
export class ImgDetailsController {

    constructor(private imgDetailsService: ImgDetailsService){}

    @Get('/:subId/:imgId')
    getImg
    (@Param('subId',  ParseIntPipe) subId: number, imgId){
        return this.imgDetailsService.getImg(subId, imgId)
    }
}
