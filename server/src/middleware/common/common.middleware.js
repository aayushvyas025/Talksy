import express from "express";
import cors from "cors";
import envVariables from "#constant/envs.constant";
import cookieParser from "cookie-parser";

const { nodeEnvironment, clientBaseUrl } = envVariables;

function setupCommonMiddleware(app) {
  app.use(express.json());
  app.use(cookieParser());

  if (nodeEnvironment === "production") {
    app.use(
      cors({
        origin: clientBaseUrl,
        credentials: true,
      }),
    );
  }
}

export default setupCommonMiddleware;
