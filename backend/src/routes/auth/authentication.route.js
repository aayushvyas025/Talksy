import express from "express"; 
import { authController } from "../../controller/index.js"; 
import { API } from "../../helper/index.js";

const router = express.Router(); 

const {auth} = API; 
const {signupController, loginController, logoutController} = authController; 

router.post(auth.SIGN_UP,signupController); 
router.post(auth.LOGIN,loginController);
router.post(auth.LOGOUT,logoutController); 

export default router; 
