import {Body,Controller,Delete, Get, Param, ParseIntPipe, Patch,Post,Req, UseGuards} from '@nestjs/common';
import { ManagementService } from './management.service';
import { request, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/auth.guard';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) {}

  @Post('sendemail')
  sendEmailToClinet(
    @Body('') body,
  ) {
    console.log('paymentForm body', body['paymentForm']);
    console.log(body['userBag']);
    
     return this.managementService.sendEmailToClinet(body['paymentForm'], body['userBag'])
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post('/:id')
  getAllImeges(
    @Req() request: Request
  ) {

    return this.managementService.getAllImegesBySubjectId(request.params.id);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Delete('/:id/:subId')
  deleteImg(
  @Param() params: Request,
  @Req() request: Request) {
    return this.managementService.deleteImg(params['id'], params['subId']);
  }


  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Patch('/:id/:subId')
  editImgDetails(
    @Param() params: Request,
     @Body('imgDetailsToUpdate') img,
     @Req() request: Request) {
       
    return this.managementService.editImgDetails(
      params['id'],
      img,
      params['subId'],
    );
  }
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post('')
  addImg(@Body('imgDataToAdd') imgDataToAdd) {
    
    console.log('aronnnnnnnnnnn', imgDataToAdd);
    
     return this.managementService.addImg(imgDataToAdd);
  }



}
