import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCartService } from './shpping-cart.service';
import { Request } from 'express';

@Controller('shpping-cart')
export class ShppingCartController {
    userEmail: string = ''
    arr = []
    constructor(private shppingCartService: ShppingCartService) { }

    @Post()
   async addImgToBag(
        @Body() shppingCartDto: ShppingCartDto,
        @Req() response: Request) {
            // this.shppingCartService.userEmail = response.body[0].email
            console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%: ',response.body.list[0]);
             
            // await this.shppingCartService.getUserByEmail(response.body[0])
            // console.log('shping dto:', shppingCartDto);
            
            this.shppingCartService.addImgToBag(
                response.body.list[0].numOfItems,
                response.body.list[0].printSize,
                response.body.list[0].printType,
                response.body.list[0].imgId,
                response.body.list[0].user_id
            );

        //    await (await this.shppingCartService.getUserBag(this.shppingCartService.userEmail)).forEach( item => {
        //      this.shppingCartService.imgIdInBagList.push(item.imgId)
               
        //      });
            
            // console.log('$ (-; )' ,this.shppingCartService.imgIdInBagList);

    return  this.shppingCartService.getUserBag(response.body.list[0].userIdByEmail);
   
}

@Get()
async getImgDetils(email:string, imgId:number){}
    // console.log(53553535);
    // await (await this.shppingCartService.getUserBag(this.shppingCartService.userEmail)).forEach( async img => {
    //     console.log('@ (-)img', img);
        // console.log('ooooffffff',await this.shppingCartService.getImgDetils(this.shppingCartService.userEmail, img.imgId));
  // })
   
//    return await await this.shppingCartService.getImgDetils(this.shppingCartService.userEmail, img.imgId)
//}

}