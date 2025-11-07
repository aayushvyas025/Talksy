import express from "express"; 
import { API } from "../../helper/index.js";
import { messagesController } from "../../controller/index.js";
import authMiddleware from "../../middleware/auth/authentication.middleware.js";

const router = express.Router(); 
const {messages} = API; 
const {protectedRoute} = authMiddleware; 
const {getUserForSidebarController, getMessagesController,createMessagesController} = messagesController; 


router.get(messages.GET_USERS, protectedRoute,  getUserForSidebarController); 
router.get(messages.GET_MESSAGES, protectedRoute, getMessagesController); 
router.post(messages.CREATE_MESSAGES, protectedRoute,createMessagesController); 

export default router; 
