import jwt from "jsonwebtoken";
import { User } from "../../model/index.js";
import { commonConstants } from "../../helper/index.js";

const { envVariables } = commonConstants;
const { jwtSecret } = envVariables;

const authMiddleware = {
  protectedRoute: async (request, response, next) => {
    try {
      const token = request.cookies.jwt_token;
      if (!token) {
        return response.status(401).json({
          success: false,
          message: "Unauthorized - No Token Provided",
        });
      }

      const decoded = jwt.verify(token, jwtSecret);
      if (!decoded) {
        return response
          .status(401)
          .json({ success: false, message: "Unauthorized - Invalid Token" });
      }

      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return response.status(404).json({ success: false, message: "No User Found" });
        
      }; 

      request.user = user; 

      next(); 
    } catch (error) {
      console.error(`Error While authorization: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default authMiddleware; 
