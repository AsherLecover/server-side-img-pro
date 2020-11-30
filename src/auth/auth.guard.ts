import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository) {}

   canActivate(context: ExecutionContext): boolean {
    
    // console.log('guard works!!!!', context.switchToHttp().getRequest().body);
    console.log('RETURN FROM GUARD:: ',context.switchToHttp().getRequest().body.role === 'ADMIN');
    
    
    
    if(context.switchToHttp().getRequest().body.role != 'ADMIN' ){
      throw  new ForbiddenException('you are nut man')
    }
    else{
      return context.switchToHttp().getRequest().body.role === 'ADMIN'
    }
   

  }
}