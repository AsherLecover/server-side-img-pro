import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
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
        // this.authService.getUserBag(authCredentialsDtoSignin.email)
        console.log('?????:', authCredentialsDtoSignin.email);
        console.log(1234);
        
        
        return this.authService.signIn(authCredentialsDtoSignin);
    }

   

    
}
