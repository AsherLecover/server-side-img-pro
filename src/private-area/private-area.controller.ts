import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PrivateAreaService } from './private-area.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer' ;
import { join } from 'path';

export const storage = {
  storage:diskStorage({
    destination:'uploads/images-user-profile',
    filename:(req,file,cb )=>{  
    console.log(req['headers'].userid);
    console.log('file:', file);
      const filename = `${req['headers'].userid}.jpg`
      console.log('file name', filename);
      cb(null,`${filename}`)
      console.log('file storage', storage);
    }
  })

}



@Controller('private-area')
export class PrivateAreaController {

  constructor(private privateAreaService: PrivateAreaService) {}

  @Post('set-img-profile')
    @UseInterceptors(FileInterceptor('image', storage))
    upload(@UploadedFile() file,
   
    ){  
    
      // return await res.sendFile(join(process.cwd(),`uploads/images-user-profile/${req['headers'].userid}.jpg`))
    }

    @Get('getFile/:id')
    getfile(@Param('id') id , @Res() res:any){
      return res.sendFile(join(process.cwd(),`uploads/images-user-profile/${8}.jpg`))
    }

  @Post('')
  getAllImegesByUserId(@Req() request: Request) {
    // console.log('private area body: ', request);
    return this.privateAreaService.getAllImegesByUserId(request.body.id);
  }

  @Get('/:id')
  getAllSubjectImgesById(@Param('id') params: Request) {
    console.log('params: ', params);
    return this.privateAreaService.getAllSubjectImgesById(params);
  }

  @Post('/:id')
  addImg(
    @Param('id') params: Request,
    @Body('imgDataToAdd') imgDataToAdd,
  ) {
    return this.privateAreaService.addImg(imgDataToAdd,params);
  }

  


  // private-area/set-img-profile`

  @Delete('/:id')
  deleteImg(
    @Param('id') params: Request,
     @Req() request: Request) {
       
   return this.privateAreaService.deleteImg(params, request.body.user.id);
  }

  @Patch('/:id/:userId')
  editImgDetails(
    @Param() params: Request,
     @Body('imgDetailsToUpdate') img) {
       console.log('paaarrrmasss:', params['id']);
       console.log('paaarrrmasss:', params['userId']);
       console.log('imgDetailsToUpdate:', img);
    return this.privateAreaService.editImgDetails(params['id'], img, params['userId'] );
  }

  @Get('')
  getAllUsers(){
    return this.privateAreaService.getAllUsers()
  }

  @Patch('')
  setCardProfile(
     @Body() data) {
       console.log('dataaaa:', data);
    return this.privateAreaService.setCardProfile(data.data, data.userId, data.colomnName);
  }
}


