import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactUsController } from './contact-us.controller';
import { ContactUsRepository } from './contact-us.repository';
import { ContactUsService } from './contact-us.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nest-modules/mailer/dist/adapters/pug.adapter';


@Module({
  imports: [
    TypeOrmModule.forFeature([ ContactUsRepository]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        service: 'Gmail',
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'picpictureservice@gmail.com', // generated ethereal user
          pass: 'qetu1357' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      defaults: {
        from: '"nest-modules" picpictureservice@gmail.com', // outgoing email ID
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new PugAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),

],
  controllers: [ContactUsController],
  providers: [ContactUsService]
})
export class ContactUsModule {}
