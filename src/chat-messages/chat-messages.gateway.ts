import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatMessagesGateway {

@WebSocketServer() wss:Server

  @SubscribeMessage('msgToServer')

  handleMessage(client: Socket, text: string):void {
    console.log(12453524, text);
    

    this.wss.emit('msgToClinet', text)

    //return {event: 'msgToClinet', data: 'Hello World'};
  }
}
