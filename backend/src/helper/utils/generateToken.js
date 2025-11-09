import jwt from "jsonwebtoken"; 
import commonConstants from "../constant/common.js";

const {envVariables} = commonConstants; 

const {jwtSecret, nodeEnviornment} = envVariables; 

async function generateToken(userId, response) {
    const token = jwt.sign({userId}, jwtSecret, {
        expiresIn:"1d"
    }); 

    response.cookie("jwt_token",token, {
        maxAge:1*24*60*60*1000,
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks 
        sameSite: nodeEnviornment === "development" ? "lax" : "none", // prevent CSRF attacks cross-site request forgery attacks 
        secure:nodeEnviornment !== "development"
    } ); 
   
   return token; 

}

export default generateToken; 