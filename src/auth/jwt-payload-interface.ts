import { role } from "./auth-role.enum";

export interface JwtPayload {
    id: number;
    role: role;
    username: string;
    email: string;
}