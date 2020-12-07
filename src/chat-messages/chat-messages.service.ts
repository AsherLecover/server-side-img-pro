import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessagesRepository } from './chat-messages-repository';

@Injectable()
export class ChatMessagesService {

    constructor(
        @InjectRepository(ChatMessagesRepository)
        private chatMessagesRepository: ChatMessagesRepository,
    ){}
}
