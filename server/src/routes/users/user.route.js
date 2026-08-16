import apiRoutes from "#constant/apiRoutes.constant";
import { updateProfile } from "#controller/user/user.controller";
import express from "express" 

const {update_profile} = apiRoutes.user; 
const router = express.Router(); 

router.put(update_profile, updateProfile); 

export default router