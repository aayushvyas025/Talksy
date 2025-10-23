import dotenv from "dotenv"; 

dotenv.config(); 

const commonConstants = {
    envVariables: {
        mongodbUri:process.env.MONGODB_URI
    },
    appConfig:{
        port:process.env.PORT
    }
}

export default commonConstants; 