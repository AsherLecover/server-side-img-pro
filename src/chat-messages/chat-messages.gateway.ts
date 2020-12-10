import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatMessagesGateway {

@WebSocketServer() wss:Server

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, paylowd: {senderId: number,  reciverId:number, text: string, time: Date}):void {
    console.log(12453524, paylowd);
    this.wss.emit('msgToClinet',paylowd)

  }
}
