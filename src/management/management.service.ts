import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { totalmem } from 'os';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import * as pug from '../../node_modules/pug';

const sgMail = require('@sendgrid/mail');

@Injectable()
export class ManagementService {
  htmlCode = '';
  template = `
   <div class="row" style=" width:100%; display: -ms-flexbox; display: flex; -ms-flex-wrap: wrap; flex-wrap: wrap; margin: 0 -16px;">
    <div class="col-75" style="  -ms-flex: 75%; /* IE10 */ flex: 75%;padding: 0 16px;">
      <div class="container" style="width: 40vh; background-color: #f2f2f2;  padding: 5px 20px 15px 20px;  border: 1px solid lightgrey;border-radius: 3px;">
     <table style=" font-family: arial, sans-serif;
     border-collapse: collapse;
     width: 100%;
     margin-top: 5%;">
       <tr style="background-color: #dddddd;">
         <th style=" border: 1px solid #dddddd; text-align: right; padding: 8px;" >מוצר</th>
        <th style=" border: 1px solid #dddddd; text-align: right; padding: 8px;">סכום ביניים</th>
       </tr>
      <tr>
    <td style=" border: 1px solid #dddddd; text-align: right; padding: 8px;" >
      <p>[imgDes]</p>
      <p>[printType]</p>
      <p>[printSize]</p>
      <img style="width: 120px; height: 80px;" src=[imgUrl] alt="" />
  </td>
    <td style=" border: 1px solid #dddddd; text-align: right; padding: 8px;">  ₪ [price] </td>
    </tr>
  <td style=" border: 1px solid #dddddd; text-align: right; padding: 8px;" >סח"ה</td>
 
    <td style=" border: 1px solid #dddddd; text-align: right; padding: 8px;">  ₪ [totalPrice] </td> 
</table>
</div>
</div>
</div>`;
  reciverEmail: string = ''
  constructor(
    @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository,
    private readonly mailerService: MailerService,
  ) { }

  async getAllImegesBySubjectId(subId) {
    const query = this.imgListRepository.createQueryBuilder(
      'img_list_by_subject',
    );

    query.where('img_list_by_subject.subId = :subId', { subId: subId });
    const images = await query.getMany();
    return images;
  }

  async deleteImg(id: number, subId: number) {
    await this.imgListRepository.delete(id);
    return this.getAllImegesBySubjectId(subId);
  }

  async editImgDetails(id: number, img: {}, subId) {
    await this.imgListRepository.update({ id }, img);
    return this.getAllImegesBySubjectId(subId);
  }

  async addImg(imgDataToAdd) {

    await this.imgListRepository.save(imgDataToAdd);
    return this.getAllImegesBySubjectId(imgDataToAdd.subId);
  }

  render(templet, dadeBase) {
    let cleenPropertiesTamplateArr = [];
    let result = '';
    let pattern = /\[(.*)\]/g;
    let propertiesTamplate = templet.match(pattern);

    for (let i of propertiesTamplate) {
      let cleenPropertiesTamplate = i.replace('[', '').replace(']', '');
      cleenPropertiesTamplateArr.push(cleenPropertiesTamplate);
    }

    dadeBase.forEach(dictItem => {
      let itemHtml = templet;

      cleenPropertiesTamplateArr.forEach(item => {
        let propertyValue = dictItem[item];
        itemHtml = itemHtml.replace(`[${item}]`, propertyValue);
      });
      result += itemHtml;
    });
    return result;
  }

  public sendEmailToClinet(paymentForm, userBag) {

    this.htmlCode = this.render(this.template, userBag);
    let cardNumber = paymentForm.cardNumber.replace(/.{15}/, "************");
    this.reciverEmail = paymentForm.email;



    this.mailerService
      .sendMail({
        to: `${this.reciverEmail}, picpictureservice@gmail.com`,  // List of receivers email address
        from: 'picpictureservice@gmail.com', // Senders email address
        subject: ' Your order from PicPicture', // Subject line
        text: '', // plaintext body
        html: `
         <div style="direction: rtl;">
         <div>
          <h1> פרטי ההזמנה  </h1>
           ${this.htmlCode}
        <br>
        </div>
        <div>
            <h1>פרטי המזמין</h1>
     
        <table style=" font-family: arial, sans-serif; border-collapse: collapse;width: 35vh;">
  <tr style="background-color: #dddddd;">
    <th style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >פרטים אישיים</th>
    <th style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" ></th>
  </tr>
  <tr ">
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;"> <b> שם מלא </b></td>
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > ${paymentForm.fullName}</td>
  </tr>
  <tr ">
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b>כתובת דוא"ל </b> </td>
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.email}</td>
  </tr>
  <tr ">
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" ><b> רחוב </b></td>
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > ${paymentForm.addrassSt} </td>
  </tr>
  <tr ">
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" ><b> עיר </b></td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > ${paymentForm.addrassCity} </td>
  </tr>
  <tr>
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b>מיקוד </b> </td>
    <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.postNum}</td>
  </tr>
  <tr >
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b> 4 ספרות אחרונות של כרטיס אשראי </b> </td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px; direction: rtl;" >${cardNumber}</td>
  </tr>
  <tr>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" ><b>תוקף חודש </b> </td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.cardValidityMonth}</td>
  </tr>
  <tr >
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b>תוקף שנה </b> </td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.cardValidityYear}</</td>
  </tr>
  <tr>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b>שם בעל הכרטיס </b> </td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.cardOwnerName}</td>
  </tr>
  <tr >
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" > <b>ת"ז בעל הכרטיס </b> </td>
  <td style=" border: 1px solid #dddddd; text-align: left; padding: 8px;" >${paymentForm.id}</td>
  </tr>
  </table>
    </div>
     </div>
    
       
        `, // HTML body content
      })
      .then(success => {
        console.log(success);
      })
      .catch(err => {
        console.log(err);
      });
  }
}