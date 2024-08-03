import { Server } from 'socket.io';
export declare class MessagesGateway {
    server: Server;
    addMessage(data: any): void;
    updateMessage(data: any): void;
}
