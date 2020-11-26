import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { ImgRep } from 'src/subjects-images-data/imgRepo';
import { ManagementController } from './management.controller';
import { ManagementService } from './management.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { PugAdapter } from '@nest-modules/mailer/dist/adapters/pug.adapter';
import * as dotenv from 'dotenv';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        service: 'Gmail',
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'ssfbzxbngd@gmail.com', // generated ethereal user
          pass: '0d2f5w8g08sg5g61' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
      }
      },
      defaults: {
        from: '"nest-modules" asherlec5@gmail.com', // outgoing email ID
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new PugAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
    
    TypeOrmModule.forFeature([
      ImgRep,
      ShppingCartRepository,
      ImgListRepository,
      UserRepository,
    ]),
  ],

  controllers: [ManagementController],
  providers: [ManagementService],
})
export class ManagementModule {}
