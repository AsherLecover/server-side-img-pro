import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ShppingCartRepository } from 'src/shpping-cart/shpping-cart-repository';
import { Repository } from 'typeorm';
import {
  AuthCredentialsDto,
  AuthCredentialsDtoSignin,
} from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload-interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  userModel: any;
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,


    private jwtService: JwtService,
    @InjectRepository(ShppingCartRepository)
    private readonly shppingCartRepository: Repository<ShppingCartRepository>
  ) { }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(
    authCredentialsDtoSignin: AuthCredentialsDtoSignin,
  ): Promise<{ accessToken: string }> {
    const user = await this.userRepository.validateUserPassword(
      authCredentialsDtoSignin,
    );

    if (!user) {
      console.log('sginIn user: ', user);
      throw new UnauthorizedException('Invalid credntials');
    }

    if (user) {
    }
    const payload: JwtPayload = {
      id: user.id,
      role: user.role,
      username: user.username,
      email: user.email,
    };
    const accessToken = await this.jwtService.sign(payload);
    setTimeout(() => {
      this.getUserBag(user.id)
    }, 5000);



    return { accessToken };
  }

  async getUserBag(id: number) {
    const query = this.shppingCartRepository.createQueryBuilder('shpping_cart');
    query.where('id = :id', { id: id });
    const itemsInBag = await query.getMany();
    console.log('BAG:', itemsInBag);
    return itemsInBag;
  }
  //---------------------------------FaceBook-----------------------------------

  async findOrCreate(profile): Promise<User> {
    const user = await this.userModel
      .findOne({ 'facebook.id': profile.id })
      .exec();
    if (user) {
      return user;
    }
    const createdUser = new this.userModel({
      email: profile.emails[0].value,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      Facebook: {
        id: profile.id,
        avatar: profile.photos[0].value,
      },
    });
    return createdUser.save();
  }
}
