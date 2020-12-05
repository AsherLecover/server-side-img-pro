import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactUsDto } from './contact-us-DTO';
import { ContactUs } from './contact-us.entity';
import { ContactUsRepository } from './contact-us.repository';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUsRepository)
    private contactUsRepository: ContactUsRepository,
    private readonly mailerService: MailerService,
  ) {}

  async contactUsSendEmail(contactUsDto: ContactUsDto) {

      const { email, fullName, message, title } = contactUsDto;
      const massageContactUs = new ContactUs;

      massageContactUs.email = email;
      massageContactUs.fullName = fullName;
      massageContactUs.message = message;
      massageContactUs.title = title;

    console.log('service contactUsSendEmail innnnnn::: ',contactUsDto);

    this.mailerService
    .sendMail({
      to: `${email}, ${process.env.EMAIL}`,  // List of receivers email address
      from: 'picpictureservice@gmail.com', // Senders email address
      subject: ' PicPicture טופס יצירת קשר   ', // Subject line
      text: '', // plaintext body
      html: `
      <div style="border:rgb(196, 184, 184) 2px solid; width: 35vh; margin-left: 32vh; margin-right: 32vh; text-align: center;">
        <h1>טופס יצירת קשר</h1>
        <h3>פנייתך בנושא הנדון: ${title} התקבלה בחברתנו ${fullName} </h3>
         <b>:פרטי ההודעה</b>
        <p>${message}</p>
        <br> <br>
        <b> נשוב ונעדכנך התוך  שבעה ימי עסקים <br> צוות PicPicture </b>
        <img style="width:32px; border-radius: 50%;" src="https://raw.githubusercontent.com/AsherLecover/shop-img-data/master/logo/pp-logo.jpeg"  alt="">

        </div>
      `, // HTML body content
    })
    .then(success => {
      console.log(success);
    })
    .catch(err => {
      console.log(err);
    });
      
      
      return await this.contactUsRepository.save(massageContactUs);
  }
}
