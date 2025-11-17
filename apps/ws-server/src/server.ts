// Node Modules
import { WebSocketServer } from "ws";
// Types
import type { WebSocket } from "ws";

// Initiate WebSocket Server
const wss = new WebSocketServer({ port: 8080 }, () => {
  console.log(`Server running in development mode on ws://localhost:${8080}`);
});

wss.on("connection", async function connection(ws: WebSocket, req) {
  ws.on("message", async function message(data) {
    ws.send(data.toString());
  });
});
