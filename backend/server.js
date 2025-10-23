import express from "express"; 
import { databaseConnection } from "./src/helper/index.js";

const app = express(); 


databaseConnection(app); 
