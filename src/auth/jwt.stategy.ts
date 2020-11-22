import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';  
import { JwtPayload } from './jwt-payload-interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

export class JwtStategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private UserRepository: UserRepository
    ){
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'topSecret51',
          // CLINET_ID_FB=718817949052988
          //CLINET_SECRET_FB=fd17b7ac4fa40e00d9b825057a01d1c6
          // http://localhost:3000/auth/facebook/secret

        });
    }

    async validate(payload: JwtPayload): Promise<User>{
        const { username } = payload
        const user = await this.UserRepository.findOne({ username });

        if(!user){
            throw new UnauthorizedException();
        }
        return user
    }
}