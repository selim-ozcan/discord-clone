import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway(80, {
  cors: { origin: ['http://localhost:3000'] },
  transports: ['websocket', 'polling'],
})
export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chat:messages:add')
  addMessage(@MessageBody() data: any) {
    this.server.emit(
      `chat:${data.channelId || data.conversationId}:messages`,
      data,
    );
  }

  @SubscribeMessage('chat:messages:update')
  updateMessage(@MessageBody() data: any) {
    this.server.emit(
      `chat:${data.channelId || data.chatId}:messages:update`,
      data,
    );
  }
}
