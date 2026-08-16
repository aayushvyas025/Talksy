import express from "express"; 
import cors from "cors"; 
import envVariables from "#constant/envs.constant";
import cookieParser from "cookie-parser";

const {nodeEnvironment} = envVariables; 

function setupCommonMiddleware(app) {
  app.use(express.json()); 
  app.use(cookieParser()); 
  
//   if(nodeEnvironment !== "production") {
//       app.use(cors({
//         origin:""
//       }));
//   }

} 

export default setupCommonMiddleware; 