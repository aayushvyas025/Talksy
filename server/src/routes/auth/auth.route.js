import express from "express";
import apiRoutes from "#constant/apiRoutes.constant";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "#controller/auth/auth.controller";

const { signup, login, logout } = apiRoutes.auth;

const router = express.Router();

router.post(signup, signupUser);
router.post(login, loginUser);
router.post(logout, logoutUser);


export default router;
