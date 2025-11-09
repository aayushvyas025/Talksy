import express from "express"; 
import cookieParser from "cookie-parser"; 
import cors from "cors"; 
import { commonConstants, servingStaticFrontend } from "../../helper/index.js";

const {envVariables} = commonConstants; 
const {frontendUrl} = envVariables; 

const commonMiddleware = {
    jsonParser:(app) => {
        app.use(express.json())
    },
    cookieParser:(app) => {
        app.use(cookieParser())
    },
    corsConnection:(app) => {
        app.use(cors({
           origin:frontendUrl,
           credentials:true  
        }))
    },
    serveStaticFrontend:(app) => {
        servingStaticFrontend(app);
    }
} 

export default commonMiddleware; 