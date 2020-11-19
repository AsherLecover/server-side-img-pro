import { Body, Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartService } from './shpping-cart.service';
import { Request } from 'express';
import { Console } from 'console';

@Controller('img-details')
export class ShppingCartController {
  userEmail: string = '';
  arr = [];
  constructor(private shppingCartService: ShppingCartService) {}

  @Post()
  async addImgToBag(
    @Body() shppingCartDto: ShppingCartDto,
    @Req() req: Request,
  ) {
    console.log('req listtttt', req.body.list[0]);

    await this.shppingCartService.addImgToBag(
      req.body.list[0].numOfItems,
      req.body.list[0].printSize,
      req.body.list[0].printType,
      req.body.list[0].img_id,
      req.body.list[0].user_id,
    );

    return this.shppingCartService.getUserBag(req.body.list[0].user_id);
  }

  @Post('shpping-cart')
  getUserBag(
      @Req() req: Request
      ) {
     return this.shppingCartService.getUserBag(req.body.user_id)
  }

  @Delete('shpping-cart')
  deleteImgFromBag(
    @Req() req: Request){
      // console.log(delete `func controler, userId:,${Number( req.query.userId)} imgId: ${Number(req.query.imgId)}`);
      // console.log(delete `func controler imgId:  ${Number(req.query.imgId)}`);

      return this.shppingCartService.deleteImgFromBag(Number( req.query.userId),Number(req.query.imgId));
  }
}



