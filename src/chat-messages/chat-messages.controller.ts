import { Body, Controller, Post } from '@nestjs/common';
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
}
