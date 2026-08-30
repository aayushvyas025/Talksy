import User from "#model/user/user.model";
import { verifyToken } from "#utils/auth/tokens.utils";

export const protectRoute = async (request, response, next) => {
  try {
    const { isValid, message, token, decoded } = verifyToken({ response });

    if (!token) {
      return response.status(401).json({ success: isValid, message });
    }

    if (!decoded) {
      return response.status(401).json({ success: isValid, message });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "Error, user not found" });
    }

    request.user = user;
    next();
  } catch (error) {
    console.error(`Error, while protecting route: ${error.message}`);
    next(error); 
  }
};
