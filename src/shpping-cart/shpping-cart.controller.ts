import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartService } from './shpping-cart.service';
import { Request } from 'express';

@Controller('shpping-cart')
export class ShppingCartController {
    userEmail: string = ''
    constructor(private shppingCartService: ShppingCartService) { }

    @Post()
   async addImgToBag(
        @Body() shppingCartDto: ShppingCartDto[],
        @Req() response: Request) {
            this.shppingCartService.userEmail = response.body[0].email
           await this.shppingCartService.addImgToBag(shppingCartDto)

    return  this.shppingCartService.getUserBag(this.shppingCartService.userEmail);
   
}

@Get()
async getImgDetils(imgId){
    console.log(53553535);
    (await this.shppingCartService.getUserBag(this.shppingCartService.userEmail)).forEach( a =>{
        return this.shppingCartService.getImgDetils(a.imgId)
    })
    
    
    // return this.shppingCartService.getImgDetils(imgId)
}


}
