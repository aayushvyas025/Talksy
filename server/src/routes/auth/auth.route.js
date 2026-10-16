const router = require("express").Router();
const User = require("../../models/user/user.model");
const AuthRepository = require("../../repositories/auth/auth.repository");
const AuthService = require("../../services/auth/auth.service");
const AuthController = require("../../controllers/auth/auth.controller");

const authRepository = new AuthRepository(User);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

router.post("/signup", authController.userSignup);
router.post("/login", authController.loginUser);
router.post("/logout", authController.userLogout);

module.exports = router;
