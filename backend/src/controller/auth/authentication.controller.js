import { generateToken } from "../../helper/index.js";
import { User } from "../../model/index.js";
import bcrypt from "bcryptjs";

const authController = {
  signupController: async (request, response) => {
    const signupInfo = request.body;

    if (!signupInfo.fullName || !signupInfo.email || !signupInfo.password) {
      return response
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }

    if (signupInfo.password.length < 6) {
      return response.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    try {
      const user = await User.findOne({email: signupInfo.email});

      if (user) {
        return response
          .status(400)
          .json({ success: false, message: "User Already Exist in Database" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(signupInfo.password, salt);
      const newUser = new User({
        fullName: signupInfo.fullName,
        password: hashedPassword,
        email: signupInfo.email,
      });

      if (newUser) {
        generateToken(newUser._id, response);
        await newUser.save();

        response.status(201).json({
          success: true,
          message: "User Signup Successfully",
          user: {
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,
          },
        });
      } else {
        response
          .status(400)
          .json({ success: false, message: "Invalid User Data" });
      }
    } catch (error) {
      console.error(`Error While Doing Signup: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  loginController: async (request, response) => {},
  logoutController: async (request, response) => {},
};

export default authController;
