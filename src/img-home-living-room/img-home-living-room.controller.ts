import { Controller, Get } from '@nestjs/common';
import { ImgHomeLivingRoomService } from './img-home-living-room.service';

@Controller('img-home-living-room')
export class ImgHomeLivingRoomController {

    constructor(private imgHomeLivingRoomService: ImgHomeLivingRoomService){}

    @Get()
    getAllImg(){
        return this.imgHomeLivingRoomService.getAllImg()

    }
}
