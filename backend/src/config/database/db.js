import mongoose from "mongoose";
import { commonConstants } from "../../helper/index.js";

const {envVariables} = commonConstants; 
const {mongodbUri} = envVariables; 

async function connectToDB() {
    try {
        const connectingToDB = await mongoose.connect(mongodbUri);
        console.log(`Database Connection Host: ${connectingToDB.connection.host}`); 
    } catch (error) {
       console.log(`Error While Creating Connection with Database: ${error.message}`);
       process.exit(1);  
    }
}; 

export default connectToDB; 