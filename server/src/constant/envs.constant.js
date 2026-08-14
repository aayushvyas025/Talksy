import "dotenv/config"

const envVariables = Object.freeze({
    mongodbUri:process.env.MONGODB_URI,
    backendPort:process.env.BACKEND_PORT,
    nodeEnvironment:process.env.NODE_ENVIRONMENT
}); 

export default envVariables;