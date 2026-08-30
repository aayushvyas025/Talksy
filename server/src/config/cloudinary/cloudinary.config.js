import { v2 as cloudinary } from "cloudinary";
import envVariables from "#constant/envs.constant";

const { cloudinaryApiKey, cloudinaryApiSecret, cloudinaryCloudName } =
  envVariables;

function configCloudinary() {
  return cloudinary.config({
    cloud_name: cloudinaryCloudName,
    api_key: cloudinaryApiKey,
    api_secret: cloudinaryApiSecret,
  });
}

export default configCloudinary;
