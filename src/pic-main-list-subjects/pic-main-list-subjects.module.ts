import { forwardRef, Module } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
import { PicMainListSubjectsController } from './pic-main-list-subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgListRepository } from './img-list-repository';
import { ImgDetailsModule } from 'src/img-details/img-details.module';

@Module({

  imports: [
    TypeOrmModule.forFeature([ImgListRepository]),
    forwardRef(() => ImgDetailsModule),
    
    
  ],

  controllers:[PicMainListSubjectsController],
  providers: [ PicMainListSubjectsService],
  exports:[],
})
export class PicMainListSubjectsModule {}
