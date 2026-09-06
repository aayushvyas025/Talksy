import "dotenv/config";

const envVariables = Object.freeze({
  mongodbUri: process.env.MONGODB_URI,
  backendPort: process.env.BACKEND_PORT,
  nodeEnvironment: process.env.NODE_ENVIRONMENT,
  jwtSecret: process.env.JWT_SECRET,
  clientBaseUrl: process.env.CLIENT_BASE_URL,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
});

export default envVariables;
