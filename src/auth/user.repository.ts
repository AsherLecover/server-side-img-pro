import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto, AuthCredentialsDtoSignin } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { role } from "./auth-role.enum";


@EntityRepository(User)
export class UserRepository extends Repository<User> {
    role:role = role.CLINET



    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const { username, email, password } = authCredentialsDto;
        if(email == 'asherlec5@gmail.com'){
            this.role = role.ADMIN
        }
        else{
            this.role = role.CLINET
        }

        

        const user = new User();
        user.username = username;
        user.role = this.role;
        user.salt = await bcrypt.genSalt();
        user.email = email;
        user.password = await this.HashPassword(password, user.salt);

        try {
            await user.save();

        } catch (error) {

            console.log(error.code);
            if (error.code === '23505') {
                throw new ConflictException('מייל זה קיים כבר במערכת')

            } else {
                console.log(error);
                
                throw new InternalServerErrorException();
            }
        }
    }

    
    

    async validateUserPassword(authCredentialsDtoSignin: AuthCredentialsDtoSignin):
     Promise<{
        id: number,
        role: role,
        username: string,
        email:string,
        imgProfile: string,
        about_you: string,
        profession:string,
        instagram_link:string,
        facebook_link:string,
        linkedin_link:string,
        twitter_link:string}>{
        const { email, password } = authCredentialsDtoSignin;
        const user = await this.findOne({email});

        if(user && await user.validatePassword(password)){
            return {
                id: user.id,
                 role: user.role,
                  username: user.username,
                  email: user.email,
                  imgProfile: user.imgProfile,
                  about_you: user.about_you,
                  profession: user.profession,
                  instagram_link: user.instagram_link,
                  facebook_link: user.facebook_link,
                  linkedin_link: user.linkedin_link,
                  twitter_link: user.twitter_link
                };
        }
        else{
            return null;
        } 
    }

    private async HashPassword(password: string, salt: string):Promise<string> {
        return bcrypt.hash(password, salt);
    }


}