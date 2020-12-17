import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ChatMessagesDto } from './chat-messages-DTO';
import { ChatMessagesGateway } from './chat-messages.gateway';
import { ChatMessagesService } from './chat-messages.service';

@Controller('chat-messages')
export class ChatMessagesController {
  constructor(
      private chatMessagesGateway: ChatMessagesGateway,
      private chatMessagesService: ChatMessagesService) {}

  @Post('')
  handleMessage(@Body('msg') msg:ChatMessagesDto) {
    console.log('message controllllerrrr:', msg); 
     return this.chatMessagesService.handleMessage(msg)
  }

  @Get('/:sender_id/:resiver_id')
  getMessage(
    @Param('sender_id') sender_id: number,
    @Param('resiver_id') resiver_id: number
  ) {

    console.log('sender_id:: ',sender_id);
    console.log('resiver_id:: ', resiver_id);
    
     return this.chatMessagesService.getMessages(sender_id, resiver_id)  
  } 

}
