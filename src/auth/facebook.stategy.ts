import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: '718817949052988',
      clientSecret: 'fd17b7ac4fa40e00d9b825057a01d1c6',
      callbackURL: 'http://localhost:3000/auth/facebook/redirect',
      scope: 'email',
      profileFields: ['emails', 'name','photos'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails,photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      photos: photos[0].value

    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}
