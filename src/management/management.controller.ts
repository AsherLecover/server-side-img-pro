import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Req } from '@nestjs/common';
import { ManagementService } from './management.service';
import { Request } from 'express';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) { }

  @Get('/:id')
  //  @UseGuards(AuthGuard())
  getAllImeges(
    @Req() request: Request,
    // @Param('subId',ParseIntPipe) subId: number,
  ) {
    console.log('req from management params:', request.params.id);

    return this.managementService.getAllImegesBySubjectId(request.params.id)
  }

  @Delete('/:id')
  deleteImg(
    @Param('id', ParseIntPipe) id: number
  ){
    return this.managementService.deleteImg(id)
  }

  @Patch('/:id')
  editImgDetails(
    @Param('id', ParseIntPipe) id: number,
    @Body('imgDetailsToUpdate') img,
  ) {
    console.log('id from mange controler',id);
    console.log('img from mange controler',img);
    
     return this.managementService.editImgDetails(id, img)
  }
}
