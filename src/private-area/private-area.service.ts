import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { ImgListRepository } from 'src/pic-main-list-subjects/img-list-repository';
import { PassThrough } from 'stream';

@Injectable()
export class PrivateAreaService {

 
  constructor(
    @InjectRepository(ImgListRepository)
    private imgListRepository: ImgListRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,

  ) {}

  async getAllSubjectImgesById(subId){
    const query = this.imgListRepository.createQueryBuilder('img_list_by_subject');

    query.where('img_list_by_subject.subId = :subId', { subId: subId });
    const images = await query.getMany();
    return images;

  }

  async getAllImegesByUserId(ownerId: number) {
    const query = this.imgListRepository.createQueryBuilder(
      'img_list_by_subject',
    );

    query.where('img_list_by_subject.ownerId = :ownerId', { ownerId: ownerId });
    const images = await query.getMany();
    return images;
  }

  async addImg(imgDataToAdd, ownerId) {
    await this.imgListRepository.save(imgDataToAdd);
    return this.getAllImegesByUserId(ownerId);
  }

  async deleteImg(imgId, userId){

    await this.imgListRepository.delete(imgId)
    return this.getAllImegesByUserId(userId)
  }
  async editImgDetails(id: number, img: any, userId) {
    await this.imgListRepository.update({ id }, img);
    return this.getAllImegesByUserId(userId);
    }

    async getAllUsers(){
      const query = this.userRepository.createQueryBuilder('user');
      const users = await query.getMany();
      return users;
    }

    async setCardProfile(data:string, id:number, colomnName: string) {
      console.log(data);
      console.log(id);
      if(colomnName == 'imgProfile'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ imgProfile: data })
        .where("id = :id", { id: id })
        .execute();
      }
      else if(colomnName == 'profession'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ profession: data })
        .where("id = :id", { id: id })
        .execute();
      }

      else if(colomnName == 'about_you'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ about_you: data })
        .where("id = :id", { id: id })
        .execute();
      }

      else if(colomnName == 'instagram_link'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ instagram_link: data })
        .where("id = :id", { id: id })
        .execute();
      }

      else if(colomnName == 'facebook_link'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ facebook_link: data })
        .where("id = :id", { id: id })
        .execute();
      }

      else if(colomnName == 'linkedin_link'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ linkedin_link: data })
        .where("id = :id", { id: id })
        .execute();
      }

      else if(colomnName == 'twitter_link'){
        const query = await this.userRepository.createQueryBuilder('user')
        .update()
        .set({ twitter_link: data })
        .where("id = :id", { id: id })
        .execute();
      }

      return await this.userRepository.find({id})

      

      
      
    }
}


