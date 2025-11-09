import path from "path";
import commonConstants from "../constant/common.js";
import express from "express";

const { envVariables } = commonConstants;
const { nodeEnviornment } = envVariables;

function servingStaticFrontend(app) {
  const __dirname = path.resolve();
  if (nodeEnviornment === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.use((_, response) => {
      response.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
  }
}

export default servingStaticFrontend;
