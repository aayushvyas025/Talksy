import mongoose from "mongoose"; 
import envVariables from "#constant/envs.constant";

const {mongodbUri} = envVariables;  

async function connectToDatabase() {
 try {
    await mongoose.connect(mongodbUri); 
    console.log(`Database connection setup successfully`);
 } catch (error) {
    console.error(`Error, while connecting with database: ${error.message}`); 
    process.exit(1); 
 }
}  


export default connectToDatabase; 

