import cloudinary from "#config/cloudinary/cloudinary.config";

export async function uploadOnCloudinary(media) {
   if (typeof media !== "string" || !media.trim()) {
    throw new Error("Media is required and must be a valid string");
  }
  try {
    const uploadResponse = await cloudinary.uploader.upload(media);
    return uploadResponse.secure_url;
  } catch (error) {
    console.error(
      `Error, while uploading media on cloudinary: ${error.message}`,
    );

    throw error
  }
}
