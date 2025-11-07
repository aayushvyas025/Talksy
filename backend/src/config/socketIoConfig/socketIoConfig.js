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
        credentials:true
    }
}); 

socketIo.on("connection", (socket) => {
  console.log(`User connected`, socket.id) ;
  socket.on("disconnected", () => {
    console.log(`A user disconnected`,socket.io)
  })

})

export default {app, server, socketIo}
