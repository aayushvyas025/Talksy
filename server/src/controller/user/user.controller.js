import cloudinary from "#config/cloudinary/cloudinary.config";
import User from "#model/user/user.model";
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
    const uploadResponse = await cloudinary.uploader.upload(profilePicture);
    const user = await User.findByIdAndUpdate(
      userId,
      { profilePicture: uploadResponse.secure_url },
      { new: true, runValidators: true },
    );

    return response.status(200).json({
      success: true,
      message: `Successfully, update user profile`,
      profilePic: user.profilePicture,
    });
  } catch (error) {
    console.error(`Error, while update user profile: ${error.message}`);
    next(error);
  }
};

export const userAuthenticated = async (request, response, next) => {
  try {
    return response
      .status(200)
      .json({
        success: true,
        message: "User is authenticated",
        user: request.user,
      });
  } catch (error) {
    console.error(
      `Error, while checking user is authenticated: ${error.message}`,
    );
    next(error);
  }
};
