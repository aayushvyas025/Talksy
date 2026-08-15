import User from "#model/user/user.model";
import { hashingPassword } from "#utils/auth/auth.util";
import { userInfoValidation } from "#validation/auth/user.validation";

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

    if (!newUser) {
      return response
        .status(400)
        .json({ success: false, message: `Error, invalid user data` });
    }
  } catch (error) {
    console.error(`Error, while signup the user: ${error.message}`);
    next(error);
  }
};

export const loginUser = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while login user: ${error.message}`);
  }
};

export const logoutUser = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while logout user: ${error.message}`);
  }
};
