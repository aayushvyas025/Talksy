const router = require("express").Router();
const User = require("../../models/user/user.model");
const AuthRepository = require("../../repositories/auth/auth.repository");
const AuthService = require("../../services/auth/auth.service");
const AuthController = require("../../controllers/auth/auth.controller");

const authRepository = new AuthRepository(User);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

const { userSignup, userLogin, userLogout } = authController;

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout", userLogout);

module.exports = router;
