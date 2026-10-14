const router = require("express").Router();
const userRoutes = require("./user/user.route");
const authRoutes = require("./auth/auth.route");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
