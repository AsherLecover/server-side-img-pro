import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStategy } from './jwt.stategy';
import { ImgRep } from '../subjects-images-data/imgRepo';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { FacebookStrategy } from './facebook.stategy';


@Module({

  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'topSecret51', signOptions: { expiresIn: 3600 } }),
    TypeOrmModule.forFeature([UserRepository, ImgRep, ShppingCartRepository])
  ],

  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStategy,
    FacebookStrategy],
  exports: [
    JwtStategy,
    PassportModule
  ],
})
export class AuthModule { }
