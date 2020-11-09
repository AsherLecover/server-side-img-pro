import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtModule } from  '@nestjs/jwt';
import { PassportModule} from '@nestjs/passport';
import { JwtStategy } from './dto/jwt.stategy';
import { ImgRep } from '../subjects-images-data/imgRepo';


@Module({

  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({secret: 'topSecret51',signOptions: { expiresIn: 3600}}),
    TypeOrmModule.forFeature([UserRepository,ImgRep])
  ],

  controllers:[AuthController],
  providers: [
  AuthService,
  JwtStategy],
  exports:[
    JwtStategy,
    PassportModule
  ],
})
export class AuthModule {}
