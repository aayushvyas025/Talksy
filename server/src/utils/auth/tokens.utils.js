import envVariables from "#constant/envs.constant";
import jwt from "jsonwebtoken";

const { jwtSecret, nodeEnvironment } = envVariables;

export const generateToken = ({ userId, response, expires = 2 }) => {
  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: `${expires}d` });
  response.cookie("jwt", token, {
    maxAge: expires * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: nodeEnvironment !== "development",
  });

  return { token };
};

export function resetCookie({ response }) {
  response.cookie("jwt", "", { maxAge: 0 });
}

export function verifyToken({ response }) {
  const token = response.cookie.token;
  if (!token) {
    return {
      isValid: false,
      message: "Error, un-authorized - no token provided",
    };
  }

  const decoded = jwt.verify(token, jwtSecret);

  if (!decoded) {
    return {
      isValid: false,
      message: "Error, un-authorized - in-valid token",
    };
  }

  return {
    token,
    decoded,
    isValid: true,
    message: "Token is verified successfully",
  };
}
