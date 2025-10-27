import { API } from "../../helper/index.js"; 
import { authRoutes, messageRoutes } from "../../routes/index.js";

const {auth, messages}  = API; 

const routesMiddleware = {
  auth:(app) => {
        app.use(auth.BASE_URL, authRoutes)
    },
  message:(app) => {
    app.use(messages.BASE_URL, messageRoutes)
  }
};

export default routesMiddleware;