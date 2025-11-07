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

export default {app, server, socketIo}
