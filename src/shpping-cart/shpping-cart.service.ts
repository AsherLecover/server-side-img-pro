import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
import { Repository } from 'typeorm';
import { PrintSize } from './print-size.enum';
import { PrintType } from './print-type.enum';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCart } from './shpping-cart-entity';
import { ShppingCartRepository } from './shpping-cart-repository';

@Injectable()
export class ShppingCartService {
 
  img_idInBagList: number[] = [];
  userEmail: string;
  userId: any;

  constructor(
    @InjectRepository(ShppingCartRepository)
    private shppingCartRepository: ShppingCartRepository,
    @InjectRepository(ImgListRepository)
    private readonly imgListRepository: Repository<ImgListRepository>,
    @InjectRepository(UserRepository)
    private readonly userRepository: Repository<UserRepository>,
  ) {}

  async addImgToBag(
    numOfItems: number,
    printSize: PrintSize,
    printType: PrintType,
    img_id: number,
    user_id: number,
  ): Promise<void> {
    const img = new ShppingCart();
    img.numOfItems = numOfItems;
    img.printSize = printSize;
    img.printType = printType;
    img.img_id = img_id;
    img.user_id = user_id;
    // console.log('img to be saved', img);

    await img.save();
  }

  async getUserBag(userId: number): Promise<any> {
    // const query = await this.imgListRepository.query(`
        // SELECT *
        // FROM shpping_cart as shp
        // JOIN img_list_by_subject as imgs
        // ON shp.img_id = imgs.id
        // WHERE user_id = ${userId}`);
    const query = await this.shppingCartRepository
      .createQueryBuilder()
      .where('ShppingCart.user_id = ' + userId)
      .leftJoinAndMapOne(
        'ShppingCart.imgdata',
        'ImgListBySubject',
        'img',
        'ShppingCart.img_id = img.id',
      )
      .getMany();

    return await query;
  }

 async deleteImgFromBag(userId: number, imgId:number ) {
  console.log('imgid from service', imgId);
    await this.shppingCartRepository.deleteImgFromBag(userId,imgId);
    return  await this.getUserBag(userId)
  }
}
