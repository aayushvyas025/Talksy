import envVariables from "#constant/envs.constant";
import jwt from "jsonwebtoken";

const { jwtSecret, nodeEnvironment } = envVariables;

export const generateToken = ({ userId, response, expires=2 }) => {
  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: `${expires}d` });
  response.cookie("jwt", token, {
    maxAge: expires * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: nodeEnvironment !== "development",
  });

  return { token };
};

export function resetCookie({response}) { 
  response.cookie("jwt", "", {maxAge:0}); 
}

