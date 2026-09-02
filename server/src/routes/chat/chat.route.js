import express from "express"; 
import apiRoutes from "#constant/apiRoutes.constant";
import { protectRoute } from "#middleware/auth/auth.middleware";
import { getMessage, sendMessage } from "#controller/message/message.controller";

const {send_message, receive_message} = apiRoutes.messages; 

const router = express.Router(); 

router.get(send_message, protectRoute, getMessage); 
router.post(receive_message, protectRoute,sendMessage)

export default router; 