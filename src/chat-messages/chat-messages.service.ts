import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessagesDto } from './chat-messages-DTO';
import { ChatMessages } from './chat-messages-entity';
import { ChatMessagesRepository } from './chat-messages-repository';

@Injectable()
export class ChatMessagesService {
  constructor(
    @InjectRepository(ChatMessagesRepository)
    private chatMessagesRepository: ChatMessagesRepository,
  ) {}


  async handleMessage(msg: ChatMessagesDto) {

    const { sender_id,  resiver_id,  message_text,  time} = msg;
    const message = new ChatMessages()
    message.sender_id = sender_id,
    message.resiver_id = resiver_id,
    message.message_text = message_text,
    message.time = time
    return  await message.save()
  }

  async getMessages(){
    return await this.chatMessagesRepository.createQueryBuilder('chat_messages').getMany()
  }
}
