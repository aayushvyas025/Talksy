import apiRoutes from "#constant/apiRoutes.constant";
import authRoutes from "#routes/auth/auth.route";
import messageRoutes from "#routes/chat/chat.route";
import userRoutes from "#routes/users/user.route";

const { baseUrl } = apiRoutes;

function setupRoutesMiddleware(app) {
  app.use(baseUrl, authRoutes);
  app.use(baseUrl, messageRoutes);
  app.use(baseUrl, userRoutes);
}

export default setupRoutesMiddleware;
