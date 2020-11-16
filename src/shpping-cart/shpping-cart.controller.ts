import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartService } from './shpping-cart.service';
import { Request, Response } from 'express';

@Controller('shpping-cart')
export class ShppingCartController {
    userEmail: string = ''
    constructor(private shppingCartService: ShppingCartService) { }

    @Post()
   async addImgToBag(
        @Body() shppingCartDto: ShppingCartDto[],
        @Req() response: Request) {
            this.userEmail = response.body[0].email
           await this.shppingCartService.addImgToBag(shppingCartDto)
    return  this.shppingCartService.getUserBag(this.userEmail);
   
}


}
