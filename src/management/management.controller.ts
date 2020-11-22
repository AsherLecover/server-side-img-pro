import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { ManagementService } from './management.service';
import { Request } from 'express';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) {}

  @Get()
  //  @UseGuards(AuthGuard())
  getAllImeges(@Req() request: Request) {
    console.log('req from management', request);
    return null;

    //  return this.managementService.getAllImegesBySubjectId(id)
  }
}
