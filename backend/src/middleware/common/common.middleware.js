import express from "express"; 
import cookieParser from "cookie-parser"; 


const commonMiddleware = {
    jsonParser:(app) => {
        app.use(express.json())
    },
    cookieParser:(app) => {
        app.use(cookieParser())
    }
} 

export default commonMiddleware; 