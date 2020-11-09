import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  username: string;

   @IsEmail()
  email: string;


  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password must have at least one uppercase letter, a lowercase a number, and a special character'} )
  password: string;
}

export class AuthCredentialsDtoSignin {

   @IsEmail()
  email: string;


  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password must have at least one uppercase letter, a lowercase a number, and a special character'} )
  password: string;
}


