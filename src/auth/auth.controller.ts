import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto, AuthCredentialsDtoSignin } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
    signUp(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto):Promise<void>{
        console.log('authCredentialsDto: (from controller..)',authCredentialsDto);
        return this.authService.signUp(authCredentialsDto)
    }

    @Post('/signin')
    // @UseGuards(AuthGuard())
    signIn(@Body(ValidationPipe) authCredentialsDtoSignin: AuthCredentialsDtoSignin): Promise< {accessToken: string}>{
       
        return this.authService.signIn(authCredentialsDtoSignin);
    }

    // @UseGuards(AuthGuard('facebook-token'))
    @Get('/facebook')
    async getTokenAfterFacebookSignIn(@Req() req) {
      console.log(req);
    //   return this.authService.findOrCreate(req)
    }
    //auth/facebook

   

    
}
