import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';

const sgMail = require('@sendgrid/mail')


@Injectable()
export class ManagementService {

  constructor(
    @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository,
  ) { }

  async getAllImegesBySubjectId(subId) {
    const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

    query.where('img_list_by_subject.subId = :subId', { subId: subId });
    const images = await query.getMany();
    return images
  }

  async deleteImg(id: number, subId: number) {
    await this.imgListRepository.delete(id)
    return this.getAllImegesBySubjectId(subId)
  }

  async editImgDetails(id: number, img: {}, subId) {
    await this.imgListRepository.update({ id }, img);
    return this.getAllImegesBySubjectId(subId)
  }

  async addImg(imgDataToAdd) {
    console.log('imgDataToAdd service', imgDataToAdd);

    await this.imgListRepository.save(imgDataToAdd);
    return this.getAllImegesBySubjectId(imgDataToAdd.subId)
  }

  public sendEmailToClinet(paymentForm, userBag) {
    // sgMail.setApiKey('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')//first
    sgMail.setApiKey('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')//seconde
    const msg = {
      to: 'asherlec5@gmail.com', // Change to your recipient
      from: 'rivkalecover@gmail.com', // Change to your verified sender
      subject: 'Pic Picutre',
      text: 'להלן פרטי ההזמנה שלך',
      html:
        `<h1>סל הקניות</h1>
      <ul>
      <li>%paymentForm.email%</li>
      </ul>`
      ,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
