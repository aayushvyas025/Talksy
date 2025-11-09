import {Server} from "socket.io";
import http from "http";
import express from "express"; 
import { commonConstants } from "../../helper/index.js";

const {envVariables} = commonConstants;
const {frontendUrl} = envVariables;

const app = express(); 
const server = http.createServer(app);

const socketIo = new Server(server, {
    cors:{
        origin:frontendUrl,
        credentials: true
    }
}); 

const usersOnline = {}; //* Maping the online users by there id

socketIo.on("connection", (socket) => {
  console.log(`User connected`, socket.id) ;
  const userId = socket.handshake.query.userId;
  if(userId) usersOnline[userId] = socket.id;
  socketIo.emit("getOnlineUsers",Object.keys(usersOnline)); 

  socket.on("disconnect", () => {
    console.log(`A user disconnected`,socket.id);
    delete usersOnline[userId];
    socketIo.emit("getOnlineUsers",Object.keys(usersOnline));
  })

})

export default {app, server, socketIo, usersOnline}
