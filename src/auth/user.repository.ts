import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto, AuthCredentialsDtoSignin } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const { username, email, password } = authCredentialsDto;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt()
        user.email = email;
        user.password = await this.HashPassword(password, user.salt);

        try {
            await user.save();

        } catch (error) {

            console.log(error.code);
            if (error.code === '23505') {
                throw new ConflictException('מייל זה קיים במערכת')

            } else {
                console.log(error.code);
                
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialsDtoSignin: AuthCredentialsDtoSignin): Promise<string>{
        const { email, password } = authCredentialsDtoSignin;
        const user = await this.findOne({email});

        if(user && await user.validatePassword(password)){
            return user.email;
        }
        else{
            return null;
        } 
    }

    private async HashPassword(password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }


}