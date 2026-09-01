import express from "express";
import apiRoutes from "#constant/apiRoutes.constant";
import { updateProfile, userAuthenticated } from "#controller/user/user.controller";
import { protectRoute } from "#middleware/auth/auth.middleware";

const { update_profile, user_authenticated } = apiRoutes.user;
const router = express.Router();

router.put(update_profile, protectRoute, updateProfile);
router.get(user_authenticated, protectRoute, userAuthenticated)

export default router;
