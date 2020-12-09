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

    async setCardProfile(data:string, id:number) {
      console.log(data);
      console.log(id);

      const   query = await this.userRepository.createQueryBuilder('user')
      .update()
      .set({ imgProfile: data })
      .where("id = :id", { id: id })
      .execute();
      return await this.userRepository.find({id})

      // const query = this.userRepository.createQueryBuilder('user');
      // query.set({ firstName: "Timber", lastName: "Saw" })
      // query.where('user.id = :id', { id: id });   

      
      // await this.userRepository.update({ userId }, data);
    }
}


