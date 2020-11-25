import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { ManagementService } from './management.service';
import { Request } from 'express';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) { }

  @Get('/:id')
  //  @UseGuards(AuthGuard())
  getAllImeges(
    @Req() request: Request,
  ) {

    return this.managementService.getAllImegesBySubjectId(request.params.id)
  }

  @Delete('/:id/:subId')
  deleteImg(
    @Param() params:Request
  ){
    
    return this.managementService.deleteImg(params['id'], params['subId'])
  }

  @Patch('/:id/:subId')
  editImgDetails(
    @Param() params:Request,
    @Body('imgDetailsToUpdate') img,
  ) {
    console.log('immmmgg', img);
    
     return this.managementService.editImgDetails(params['id'], img, params['subId'])
  }

  @Post('')
  addImg(
    @Body('imgDataToAdd') imgDataToAdd,
  ){
    // console.log('body:', imgDataToAdd);
    // console.log(imgDataToAdd);
    return this.managementService.addImg(imgDataToAdd)

  }
}
