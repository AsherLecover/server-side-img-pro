import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { ImgRep } from 'src/subjects-images-data/imgRepo';
import { ManagementController } from './management.controller';
import { ManagementService } from './management.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ImgRep,
      ShppingCartRepository,
      ImgListRepository,
      UserRepository,
    ]),
  ],

  controllers: [ManagementController],
  providers: [ManagementService],
})
export class ManagementModule {}
