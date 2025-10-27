import express from "express";
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const { jsonParser, cookieParser } = commonMiddleware;
const { auth, message} = routesMiddleware;
const app = express();
jsonParser(app);
cookieParser(app);
auth(app);
message(app);


databaseConnection(app);
