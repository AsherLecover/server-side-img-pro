import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from './shpping-cart-repository';
import { ShppingCartController } from './shpping-cart.controller';
import { ShppingCartService } from './shpping-cart.service';

@Module({
 imports: [TypeOrmModule.forFeature([ShppingCartRepository,ImgListRepository,UserRepository])],
  controllers: [ShppingCartController],
  providers: [ShppingCartService],
})
export class ShppingCartModule {}
