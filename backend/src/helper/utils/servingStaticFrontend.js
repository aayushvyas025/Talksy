import path from "path";
import commonConstants from "../constant/common.js";
import express from "express";

const { envVariables } = commonConstants;
const { nodeEnviornment } = envVariables;
const __dirname = path.resolve();

function servingStaticFrontend(app) {
    if(nodeEnviornment === "production") {
     app.use(express.static(path.join(__dirname, "../frontend/dist"))); 

     app.use((_, response) => {
        response.sendFile(path.join(__dirname, "../frontend/dist", "index.html"))
     })
    }
  }

export default servingStaticFrontend;
