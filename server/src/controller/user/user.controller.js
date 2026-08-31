import configCloudinary from "#config/cloudinary/cloudinary.config";
import { validateUserInput } from "#validation/user/user.validation";

export const updateProfile = async (request, response, next) => {
  const { profilePicture } = request.body;
  const { _id: userId } = request.user;
  const { isValid } = validateUserInput(profilePicture);

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: "Error, profile picture required" });
  }
  try {
    const { cloudinary } = configCloudinary();
    const uploadResponse = await cloudinary.uploader.upload(profilePicture);
  } catch (error) {
    console.error(`Error, while fetching user profile: ${error.message}`);
    next(error);
  }
};
