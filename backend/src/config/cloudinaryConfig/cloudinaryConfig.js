import {v2 as cloudinary} from "cloudinary"; 
import { commonConstants } from "../../helper/index.js";

const {envVariables} = commonConstants; 
const { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret} = envVariables; 

cloudinary.config({
    cloud_name:cloudinaryCloudName, 
    api_key:cloudinaryApiKey,
    api_secret:cloudinaryApiSecret
}); 


export default cloudinary; 
