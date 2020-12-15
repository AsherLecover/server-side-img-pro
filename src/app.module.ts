import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubjectsImagesDataModule } from './subjects-images-data/subjects-images-data.module';
import { PicMainListSubjectsModule } from './pic-main-list-subjects/pic-main-list-subjects.module';
import { ImgDetailsModule } from './img-details/img-details.module';
import { ShppingCartModule } from './shpping-cart/shpping-cart.module';
import { ManagementModule } from './management/management.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ImgHomeLivingRoomModule } from './img-home-living-room/img-home-living-room.module';
import { ConfigModule } from '@nestjs/config';
import { PrivateAreaModule } from './private-area/private-area.module';
import { ChatMessagesModule } from './chat-messages/chat-messages.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    AuthModule,
    SubjectsImagesDataModule,
    PicMainListSubjectsModule,
    ImgDetailsModule,
    ShppingCartModule,
    ManagementModule,
    ContactUsModule,
    ImgHomeLivingRoomModule,
    PrivateAreaModule,
    ChatMessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
