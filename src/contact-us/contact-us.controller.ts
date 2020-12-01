import { Body, Controller, Post } from '@nestjs/common';
import { ContactUsDto } from './contact-us-DTO';
import { ContactUsService } from './contact-us.service';

@Controller('contact-us')
export class ContactUsController {

    constructor(private contactUsService: ContactUsService){}

    @Post()
  contactUsSendEmail( @Body() contactUsDto: ContactUsDto ) {
    console.log('controler contactUsSendEmail innnnnn::: ',contactUsDto);
    
    return this.contactUsService.contactUsSendEmail(contactUsDto['masseageForm'])
  }
}
