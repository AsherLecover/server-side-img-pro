import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ImgListBySubject } from 'src/pic-main-list-subjects/img-list.entity';
import { PicMainListSubjectsModule } from 'src/pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgDetailsController } from './img-details.controller';
import { ImgDetailsService } from './img-details.service';

@Module({
    imports:[ ,
        forwardRef(() => PicMainListSubjectsModule),
],
    controllers:[ImgDetailsController],
    providers: [ImgDetailsService],
})
export class ImgDetailsModule {}
