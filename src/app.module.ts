import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubjectsImagesDataService } from './subjects-images-data/subjects-images-data.service';
import { SubjectsImagesDataController } from './subjects-images-data/subjects-images-data.controller';
import { SubjectsImagesDataModule } from './subjects-images-data/subjects-images-data.module';
import { PicMainListSubjectsModule } from './pic-main-list-subjects/pic-main-list-subjects.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SubjectsImagesDataModule,
    PicMainListSubjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
