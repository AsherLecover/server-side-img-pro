import { Module } from '@nestjs/common';
import { ChatMessagesController } from './chat-messages.controller';
import { ChatMessagesService } from './chat-messages.service';

@Module({
    imports:[],
    controllers:[ChatMessagesController],
    providers:[ChatMessagesService],

})
export class ChatMessagesModule {}
