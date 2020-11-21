import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { role } from "../auth-role.enum";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  username: string;

  role: role;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password must have at least one uppercase letter, a lowercase a number, and a special character' })
  password: string;
}

export class AuthCredentialsDtoSignin {

  @IsEmail()
  email: string;

  role: role;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password must have at least one uppercase letter, a lowercase a number, and a special character' })
  password: string;
}


