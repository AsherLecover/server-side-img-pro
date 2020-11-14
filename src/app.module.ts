import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubjectsImagesDataModule } from './subjects-images-data/subjects-images-data.module';
import { PicMainListSubjectsModule } from './pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgDetailsModule } from './img-details/img-details.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SubjectsImagesDataModule,
    PicMainListSubjectsModule,
    ImgDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
