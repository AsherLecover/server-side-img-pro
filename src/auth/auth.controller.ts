import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {
  AuthCredentialsDto,
  AuthCredentialsDtoSignin,
} from './dto/auth-credentials.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    console.log('authCredentialsDto: (from controller..)', authCredentialsDto);
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  // @UseGuards(AuthGuard())
  signIn(
    @Body(ValidationPipe) authCredentialsDtoSignin: AuthCredentialsDtoSignin,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDtoSignin);
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    console.log(req.user);

    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }
}
