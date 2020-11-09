import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStategy } from 'src/auth/dto/jwt.stategy';
import { UserRepository } from 'src/auth/user.repository';
import { ImgRep } from './imgRepo';
import { SubjectsImagesDataController } from './subjects-images-data.controller';
import { SubjectsImagesDataService } from './subjects-images-data.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ImgRep])
      ],
    
      controllers:[SubjectsImagesDataController],
      providers: [
        SubjectsImagesDataService],
      exports:[
      ],
    

})
export class SubjectsImagesDataModule {

}
