import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { ImgRep } from 'src/subjects-images-data/imgRepo';
import { PrivateAreaController } from './private-area.controller';
import { PrivateAreaService } from './private-area.service';

@Module({imports:[

    TypeOrmModule.forFeature([
        ImgRep,
        ShppingCartRepository,
        ImgListRepository,
        UserRepository,
      ]),
    ],

    controllers: [PrivateAreaController],
    providers: [PrivateAreaService],
})
export class PrivateAreaModule {}
