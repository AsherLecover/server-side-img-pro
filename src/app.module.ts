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
import { PrivateAreaController } from './private-area/private-area.controller';
import { PrivateAreaService } from './private-area/private-area.service';
import { PrivateAreaModule } from './private-area/private-area.module';
import { ChatMessagesController } from './chat-messages/chat-messages.controller';
import { ChatMessagesService } from './chat-messages/chat-messages.service';
import { ChatMessagesModule } from './chat-messages/chat-messages.module';



@Module({
  imports: [
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
