import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { Repository } from 'typeorm';
import { PrintSize } from './print-size.enum';
import { PrintType } from './print-type.enum';
import { ShppingCartDto } from './shpping-cart-DTO';
import { ShppingCart } from './shpping-cart-entity';
import { ShppingCartRepository } from './shpping-cart-repository';

@Injectable()
export class ShppingCartService {
    imgIdInBagList: number[] = []
    userEmail: string;
    userId: any;



    constructor(
        @InjectRepository(ShppingCartRepository)
        private shppingCartRepository: ShppingCartRepository,
        @InjectRepository(ImgListRepository)
        private readonly imgListRepository: Repository<ImgListRepository>,
        @InjectRepository(UserRepository)
        private readonly userRepository: Repository<UserRepository>
    ) { }

    async addImgToBag(
        numOfItems: number,
        printSize: PrintSize,
        printType: PrintType,
        imgId: number,
        user_id: number
    ): Promise<void> {

        // let id  = await this.getUserByEmail(this.userEmail);


        const img = new ShppingCart()
        // for (const i of shppingCartDto) {
        img.numOfItems = numOfItems;
        img.printSize = printSize;
        img.printType = printType;
        img.imgId = imgId;
        img.user_id = user_id;
        console.log('img to be saved', img);

        await img.save()

        // }
        // console.log('img from repository: ', img);

    }

    // async addImgToBag(shppingCartDto: ShppingCartDto[]): Promise<void> {
    //     return await this.shppingCartRepository.addImgToBag(shppingCartDto)
    // }

    async getUserBag(userIdByEmail: number): Promise<any> {
        return await this.shppingCartRepository.getUserBag(userIdByEmail)
    }
    // async getUserByEmail(email: string) {
    //     const query = this.userRepository.createQueryBuilder('user');
    //     const user = await query.select('user.id').where('email = :email', { email: email })
   // .getOne()
    //     this.userId = user
        // console.log('dfsadgfsdg' ,user['id']);

        // console.log('dfgdhb',this.userId['id']);

        //    return await user['id']
    }

  //  async getImgDetils() {


        // await (await this.getUserBag(this.userEmail)).forEach(async item => {
        //     console.log('aronnnnnnnnnnnn', await this.imgListRepository.findOne({ id: item.imgId }));


            // await  this.arr.push( await this.imgListRepository.findOne({ id:  item.imgId}))
            // this.imgIdInBagList.push(item.imgId)
      //  });
        // const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');
        // this.imgIdInBagList.forEach( async imgIdd => {
        //     console.log('forEach: ',imgIdd);
        //     await this.a.push(this.imgListRepository.findOne({ id: imgIdd}))
        //     // query.where('img_list_by_subject.id = :imgId', { imgId: imgId })
        //     // const imgs = await query.getOne();
        // })
        // console.log(this.imgIdInBagList);

        // this.imgIdInBagList = []
        // console.log('string to booo refsgdsg',this.arr);

        // return await this.arr

        //  return this.a
   // }
//}

