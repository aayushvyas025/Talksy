import { socketIoServer } from "./src/config/index.js";
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const {app, server} = socketIoServer
const { jsonParser, cookieParser, corsConnection } = commonMiddleware;
const { auth, message } = routesMiddleware;

jsonParser(app);
cookieParser(app);
corsConnection(app);
auth(app);
message(app);
databaseConnection(server);
