import cloudinary from "#config/cloudinary/cloudinary.config";
import User from "#model/user/user.model";
import { uploadOnCloudinary } from "#utils/media/media.util";
import {
  validateUserId,
  validateUserInput,
} from "#validation/user/user.validation";

export const fetchUsers = async (request, response, next) => {
  const currentUserId = request.user._id;
  try {
    const users = await User.find({ _id: { $ne: currentUserId } })
      .sort({ createdAt: -1 })
      .select("-password");
    return response.status(200).json({
      success: true,
      message: users.length > 0 ? "Fetch users successfully" : "No users found",
      users,
    });
  } catch (error) {
    console.error(`Error, while fetching users: ${error.message}`);
    next(error);
  }
};

export const fetchUserById = async (request, response, next) => {
  const { _id: userId } = request.user;
  const { isValidId } = validateUserId(userId);
  if (!isValidId) {
    return response
      .status(400)
      .json({ success: false, message: "Error, invalid userId" });
  }

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "Error, user not found" });
    }

    return response
      .status(200)
      .json({ success: true, message: "Fetch userId successfully", user });
  } catch (error) {
    console.error(`Error while fetching user by id: ${error.message}`);
    next(error);
  }
};

export const updateProfile = async (request, response, next) => {
  const { profilePicture } = request.body;
  const { _id: userId } = request.user;
  const { isValid } = validateUserInput(profilePicture);
  const { isValidId } = validateUserId(userId);

  if (!isValid || !isValidId) {
    return response.status(400).json({
      success: false,
      message: isValidId
        ? "Error, invalid userId"
        : "Error, profile picture required",
    });
  }

  try {
    const imageUrl = await uploadOnCloudinary(profilePicture); 
    const user = await User.findByIdAndUpdate(
      userId,
      { profilePicture:imageUrl },
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

export const userAccountDelete = async (request, response, next) => {
  const { _id: userId } = request.user;
  const { isValidId } = validateUserId(userId);

  if (!isValidId) {
    return response
      .status(400)
      .json({ success: false, message: "Error, invalid userId" });
  }

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "Error, user not found" });
    }

    return response
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error(`Error while deleting user account: ${error.message}`);
    next(error);
  }
};

export const userAuthenticated = async (request, response, next) => {
  try {
    return response.status(200).json({
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
