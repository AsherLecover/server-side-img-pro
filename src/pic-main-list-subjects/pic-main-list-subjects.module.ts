import { Module } from '@nestjs/common';
import { PicMainListSubjectsService } from './pic-main-list-subjects.service';
import { PicMainListSubjectsController } from './pic-main-list-subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgListRepository } from './img-list-repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  // providers: [PicMainListSubjectsService],
  // controllers: [PicMainListSubjectsController]
  imports: [
    TypeOrmModule.forFeature([ImgListRepository]),
    AuthModule

    // PassportModule.register({defaultStrategy:'jwt'}),
    // JwtModule.register({secret: 'topSecret51',signOptions: { expiresIn: 3600}}),
    
  ],

  controllers:[PicMainListSubjectsController],
  providers: [
    PicMainListSubjectsService],
  exports:[
  ],
})
export class PicMainListSubjectsModule {}
