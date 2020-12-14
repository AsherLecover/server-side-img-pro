import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { text } from 'express';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatMessagesGateway {

@WebSocketServer() wss:Server

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, paylowd: {senderId: number, reciverId:number, text: string, time: Date}):void {
    console.log(12453524, paylowd);
    // client.broadcast.to()
    // this.wss.to(paylowd.reciverId.toString()).emit('msgToClinet',paylowd) 
    this.wss.emit('msgToClinet',paylowd)

  }
}
