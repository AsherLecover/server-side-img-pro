import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { PicMainListSubjectsModule } from 'src/pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgHomeLivingRoomController } from './img-home-living-room.controller';
import { ImgHomeLivingRoomService } from './img-home-living-room.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([ImgListRepository]),
       forwardRef(() => PicMainListSubjectsModule)
   ],
   controllers:[ImgHomeLivingRoomController],
   providers: [ImgHomeLivingRoomService],
})
export class ImgHomeLivingRoomModule {}
