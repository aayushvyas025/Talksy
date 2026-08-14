import apiRoutes from "#constant/apiRoutes.constant";
import authRoutes from "#routes/auth/auth.route";
import messageRoutes from "#routes/chat/chat.route";
import userRoutes from "#routes/users/user.route";

const { authBaseUrl } = apiRoutes.auth;
const { messageBaseUrl } = apiRoutes.messages;
const { userBaseUrl } = apiRoutes.user;

function setupRoutesMiddleware(app) {
  app.use(authBaseUrl, authRoutes);
  app.use(messageBaseUrl, messageRoutes);
  app.use(userBaseUrl, userRoutes);
}

export default setupRoutesMiddleware;
