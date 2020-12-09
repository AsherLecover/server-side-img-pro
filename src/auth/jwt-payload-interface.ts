import { role } from "./auth-role.enum";

export interface JwtPayload {
    id: number;
    role: role;
    username: string;
    email: string;
    imgProfile: string;
    about_you:string;
    profession:string;
    instagram_link:string;
    facebook_link:string;
    linkedin_link:string;
    twitter_link:string;
}