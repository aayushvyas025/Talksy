import User from "#model/user/user.model";
import { comparePassword, hashingPassword } from "#utils/auth/auth.util";
import { generateToken, resetCookie } from "#utils/auth/tokens.utils";
import {
  userInfoValidation,
  validateLoginUser,
} from "#validation/auth/auth.validation";

export const signupUser = async (request, response, next) => {
  const { fullName, email, password } = request.body;
  const { isValid, field } = userInfoValidation({ fullName, email, password });

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: `Error, ${field} required` });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return response
        .status(409)
        .json({ success: false, message: `Error, user already exist` });
    }

    const { hashedPassword } = await hashingPassword(password);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    generateToken({ userId: newUser._id, response, expires: 7 });

    return response.status(201).json({
      success: true,
      message: `User signed up successfully`,
      newUser: {
        fullName: newUser.fullName,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      },
    });
  } catch (error) {
    console.error(`Error, while signup the user: ${error.message}`);
    next(error);
  }
};

export const loginUser = async (request, response, next) => {
  const { email, password } = request.body;
  const { isValid, field } = validateLoginUser({ email, password });

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: `Error, ${field} required` });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: `Error, user not found` });
    }

    const { validPassword } = await comparePassword({
      password,
      storedPassword: user.password,
    });

    if (!validPassword) {
      return response
        .status(400)
        .json({ success: false, message: `Error, password is incorrect` });
    }

    generateToken({ userId: user._id, response });
    return response.status(200).json({
      success: true,
      message: "User login successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error(`Error, while login user: ${error.message}`);
    next(error);
  }
};

export const logoutUser = async (request, response, next) => {
  try {
    resetCookie({response});
    response
      .status(200)
      .json({ success: true, message: "User logout successfully" });
  } catch (error) {
    console.error(`Error, while logout user: ${error.message}`);
    next(error);
  }
};
