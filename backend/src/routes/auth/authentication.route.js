import express from "express";
import { authController } from "../../controller/index.js";
import { API } from "../../helper/index.js";
import authMiddleware from "../../middleware/auth/authentication.middleware.js";


const router = express.Router();
const { auth } = API;
const { signupController, loginController, logoutController, updateProfile, userAuthenticated } =
  authController;
const { protectedRoute } = authMiddleware;

router.post(auth.SIGN_UP, signupController);
router.post(auth.LOGIN, loginController);
router.post(auth.LOGOUT, logoutController);
router.put(auth.UPDATE_PROFILE, protectedRoute, updateProfile);
router.get(auth.USER_AUTHENTICATED, protectedRoute,userAuthenticated);

export default router;
