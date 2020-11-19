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
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    
  
    private jwtService: JwtService,
    @InjectRepository(ShppingCartRepository)
    private readonly shppingCartRepository: Repository<ShppingCartRepository>
  ) {}

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
    if(user){
      
      this.getUserBag(user.email)
    }
    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }

  async getUserBag(email: string) {
    console.log('from service:', email);

    const query = this.shppingCartRepository.createQueryBuilder('shpping_cart');

    query.where('email = :email', { email: email });
    const itemsInBag = await query.getMany();
    console.log('BAG:', itemsInBag);


    
    return itemsInBag;
  }
}
