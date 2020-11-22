import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubjectsImagesDataModule } from './subjects-images-data/subjects-images-data.module';
import { PicMainListSubjectsModule } from './pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgDetailsModule } from './img-details/img-details.module';
import { ShppingCartController } from './shpping-cart/shpping-cart.controller';
import { ShppingCartService } from './shpping-cart/shpping-cart.service';
import { ShppingCartModule } from './shpping-cart/shpping-cart.module';
import { ManagementController } from './management/management.controller';
import { ManagementService } from './management/management.service';
import { ManagementModule } from './management/management.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SubjectsImagesDataModule,
    PicMainListSubjectsModule,
    ImgDetailsModule,
    ShppingCartModule,
    ManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
