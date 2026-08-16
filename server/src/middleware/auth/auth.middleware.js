import { verifyToken } from "#utils/auth/tokens.utils";

export const protectRoute = async (request, response, next) => {
  try {
    const {isValid, message, token, decoded} = verifyToken({response}); 
    
    if(!token) {
        console.log(isValid, message); 
        return response.status(401).json({success:isValid, message})
    }

  } catch (error) {
    console.error(`Error, while protecting route: ${error.message}`);
  }
};
