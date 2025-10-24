import dotenv from "dotenv"; 

dotenv.config(); 

const commonConstants = {
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        jwtSecret:process.env.JWT_SECRET,
        nodeEnviornment:process.env.NODE_ENV
    },
    appConfig:{
        port:process.env.PORT
    }
}

export default commonConstants; 