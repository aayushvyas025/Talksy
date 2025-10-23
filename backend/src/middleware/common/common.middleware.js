import express from "express"; 


const commonMiddleware = {
    jsonParser:(app) => {
        app.use(express.json())
    }
} 

export default commonMiddleware; 