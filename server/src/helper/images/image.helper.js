import configCloudinary from "#config/cloudinary/cloudinary.config";

export async function uploadImage(image) {
  if (!image.trim() || typeof image !== "string") {
    throw new Error("Profile Picture required");
  }
  const { cloudinary } = configCloudinary;
  try {
    const uploadedResult = await cloudinary.uploader.upload(image);
    return uploadedResult;
  } catch (error) {
    console.error(
      `Error, while uploading profile picture to cloudinary: ${error.message}`,
    );
    throw error;
  }
}