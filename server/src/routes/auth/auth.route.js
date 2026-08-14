import express from "express"; 
import apiRoutes from "#constant/apiRoutes.constant";

const {signup, login, logout } = apiRoutes.auth; 

const router = express.Router(); 


export default router; 