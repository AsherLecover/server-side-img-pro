import { Module } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
import { PicMainListSubjectsController } from './pic-main-list-subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgListRepository } from './img-list-repository';

@Module({
  // providers: [PicMainListSubjectsService],
  // controllers: [PicMainListSubjectsController]
  imports: [
    TypeOrmModule.forFeature([ImgListRepository])
  ],

  controllers:[PicMainListSubjectsController],
  providers: [
    PicMainListSubjectsService],
  exports:[
  ],
})
export class PicMainListSubjectsModule {}
