import dotenv from "dotenv"; 

dotenv.config(); 

const commonConstants = {
    envVariables: {
        mongodbUri:process.env.MONGODB_URI,
        jwtSecret:process.env.JWT_SECRET,        
        nodeEnviornment:process.env.NODE_ENV,
        cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME, 
        cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET
    },
    appConfig:{
        port:process.env.PORT
    }
}

export default commonConstants; 