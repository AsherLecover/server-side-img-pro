import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessagesController } from './chat-messages.controller';
import { ChatMessagesService } from './chat-messages.service';
import { ChatMessagesRepository } from '../chat-messages/chat-messages-repository'

@Module({
    imports:[
        TypeOrmModule.forFeature([ChatMessagesRepository])
    ],
    controllers:[ChatMessagesController],
    providers:[ChatMessagesService],

})
export class ChatMessagesModule {}
