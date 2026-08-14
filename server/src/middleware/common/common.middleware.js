import express from "express"; 
import cors from "cors"; 
import envVariables from "#constant/envs.constant";

const {nodeEnvironment} = envVariables; 

function setupCommonMiddleware(app) {
  app.use(express.json()); 
  if(nodeEnvironment !== "production") {
      app.use(cors({
        origin:""
      }));
  }

} 

export default setupCommonMiddleware; 