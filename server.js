import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

// this file is for creating socket.io server in the next.js project.
// alternatively we could create a seperate backend server handling socket.io server creation and client connections.
// a good option for that is using nest.js with its WebsocketGateway.

// delete type: module from package.json if you delete this file in the future.

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {});

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
