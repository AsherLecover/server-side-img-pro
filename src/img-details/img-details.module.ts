import { Module } from '@nestjs/common';
import { PicMainListSubjectsModule } from 'src/pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgDetailsController } from './img-details.controller';
import { ImgDetailsService } from './img-details.service';

@Module({
    imports:[PicMainListSubjectsModule],
    controllers:[ImgDetailsController],
    providers: [
        ImgDetailsService],
})
export class ImgDetailsModule {}
