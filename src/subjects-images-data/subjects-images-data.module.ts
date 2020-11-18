import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStategy } from 'src/auth/jwt.stategy';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { ShppingCartModule } from 'src/shpping-cart/shpping-cart.module';
import { ShppingCartService } from 'src/shpping-cart/shpping-cart.service';
import { ImgRep } from './imgRepo';
import { SubjectsImagesDataController } from './subjects-images-data.controller';
import { SubjectsImagesDataService } from './subjects-images-data.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ImgRep,ShppingCartRepository,ImgListRepository,UserRepository])],
    
      controllers:[SubjectsImagesDataController],
      providers: [
        SubjectsImagesDataService],
      exports:[
      ],
    

})
export class SubjectsImagesDataModule {

}
