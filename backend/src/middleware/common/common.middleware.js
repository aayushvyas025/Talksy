import express from "express"; 
import cookieParser from "cookie-parser"; 
import cors from "cors"; 
import { commonConstants } from "../../helper/index.js";

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
    }
} 

export default commonMiddleware; 