import { API } from "../../helper/index.js"; 
import { authRoutes, messageRoutes, userRoutes } from "../../routes/index.js";

const {auth, messages, users}  = API; 

const routesMiddleware = {
  auth:(app) => {
        app.use(auth.BASE_URL, authRoutes)
    },
  message:(app) => {
    app.use(messages.BASE_URL, messageRoutes)
  },
  user:(app) => {
    app.use(users.BASE_URL, userRoutes)
  }
};

export default routesMiddleware;