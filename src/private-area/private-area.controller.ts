import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PrivateAreaService } from './private-area.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer' ;
import { parse, join } from 'path';
import { v4 as uuidv4 } from 'uuid';




export const storageImgProfile = {

  storage:diskStorage({
    destination:'uploads/images-user-profile',
    filename:(req,file,cb )=>{  
    // console.log(req['headers'].userid);
    // console.log('file:', file);
      const filename = `${req['headers'].userid}.jpg`
      console.log('file name', filename);
      cb(null,`${filename}`)
      console.log('file storageImgProfile', storageImgProfile);
    }
  })
}

export const storageImgList = {

  storage:diskStorage({
    destination:`uploads/images-user-uploads`,
    filename:(req,file,cb )=>{  
    // console.log(req['headers'].userid);
    // console.log('file:', file);
    console.log('jj7687687687687jjj', file);
     
      const filename = `${req['headers'].uuid}.jpg`
      // const filename = `${uuidv4()}.jpg`
      // console.log('file name', filename);
      cb(null,`${filename}`)
      console.log('file storageImgProfile', storageImgList);
    }
  })
}


@Controller('private-area')
export class PrivateAreaController {
  imgUuId

  constructor(private privateAreaService: PrivateAreaService) {}

  @Post('set-img-profile')
    @UseInterceptors(FileInterceptor('image', storageImgProfile))
     async upload(
       @UploadedFile() file,
        @Req() req:any,
    ){  
      
      return  await this.privateAreaService.setCardProfile(
        `http://127.0.0.1:3000/private-area/getFile/${req['headers'].userid}`, req['headers'].userid, 'imgProfile');

    }

  @Post('/:id')
  @UseInterceptors(FileInterceptor('image', storageImgList))
  addImg(
    @Param('id') params: Request,
    @Body('') imgDataToAdd,
    @UploadedFile() file,
  ) {
  }

  @Post('/:id/other-data')
 async addImgOtherData(
    @Param('id') params: Request,
    @Body('') body,
    @Res() res:any,
  ) {
    body.imgDataToAdd.imgUrl = `http://127.0.0.1:3000/private-area/get-pic/${body.uuid}`
    console.log('imgDataToAdd111111111111::', body);
    
   return this.privateAreaService.addImg(body.imgDataToAdd,params);
  }

  @Get('get-pic/:id')
  getImgfile(
    @Res() res:any,
    @Param('id') id ){
     return res.sendFile(join(process.cwd(),`uploads/images-user-uploads/${id}.jpg`))
  }

    @Get('getFile/:id')
    getfile(
      @Res() res:any,
      @Param('id') id ){
       return res.sendFile(join(process.cwd(),`uploads/images-user-profile/${id}.jpg`))
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


