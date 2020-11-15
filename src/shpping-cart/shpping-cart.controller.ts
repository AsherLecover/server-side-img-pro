import { Body, Controller, Post, Res } from '@nestjs/common';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartService } from './shpping-cart.service';
import { Response } from 'express';

@Controller('shpping-cart')
export class ShppingCartController {
    constructor(private shppingCartService: ShppingCartService) { }

    @Post()
    addImgToBag(
        @Body() shppingCartDto: ShppingCartDto[],
        @Res() request: Response): Promise<void> {
    console.log('shpping from controler: ', shppingCartDto);

    return this.shppingCartService.addImgToBag(shppingCartDto)
}





}
