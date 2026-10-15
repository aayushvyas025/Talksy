const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../constants/config.constant");

export async function hashingPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { hashedPassword };
}

export async function generateToken(userId, response) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });

 await response.cookie("JWT_TOKEN", token, {
    maxAge: 2 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: config.appEnv !== "development",
  });
}
