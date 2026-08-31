import { validateUserInput } from "#validation/user/user.vallidation";

export const updateProfile = async (request, response, next) => {
  const { profilePic } = request.body;
  const { isValid } = validateUserInput(profilePic);

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: "Error, profile picture required" });
  }
  try {
  } catch (error) {
    console.error(`Error, while fetching user profile: ${error.message}`);
    next(error);
  }
};
