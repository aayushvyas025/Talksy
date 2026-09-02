import express from "express";
import apiRoutes from "#constant/apiRoutes.constant";
import {
  fetchUser,
  fetchUsers,
  updateProfile,
  userAuthenticated,
} from "#controller/user/user.controller";
import { protectRoute } from "#middleware/auth/auth.middleware";

const { update_profile, user_authenticated, fetch_users, fetch_user_id } =
  apiRoutes.user;
const router = express.Router();

router.get(fetch_users, protectRoute, fetchUsers);
router.get(fetch_user_id, protectRoute, fetchUser);
router.put(update_profile, protectRoute, updateProfile);
router.get(user_authenticated, protectRoute, userAuthenticated);

export default router;
