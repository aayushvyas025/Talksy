import express from "express";
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const { jsonParser, cookieParser, corsConnection } = commonMiddleware;
const { auth, message } = routesMiddleware;
const app = express();
jsonParser(app);
cookieParser(app);
corsConnection(app);
auth(app);
message(app);
databaseConnection(app);
