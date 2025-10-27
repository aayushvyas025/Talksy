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
      const user = await User.findOne({ email: signupInfo.email });

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
  loginController: async (request, response) => {
    const loginInfo = request.body;
    try {
      const user = await User.findOne({ email: loginInfo.email });
      if (!user) {
        return response
          .status(400)
          .json({ success: false, message: "Invalid Credentials" });
      }
      const isPasswordCorrect = await bcrypt.compare(
        loginInfo.password,
        user.password
      );
      if (!isPasswordCorrect) {
        return response
          .status(400)
          .json({ success: false, message: "Invalid Credentials" });
      }

      generateToken(user._id, response);
      response.status(200).json({
        success: true,
        message: "User Login Successfully",
        loginUser: {
          _id: user._id,
          email: user.email,
          profilePic: user.profilePic,
        },
      });
    } catch (error) {
      console.error(`Error While Login User: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  logoutController: async (request, response) => {
    try {
      response.cookie("jwt-token", "", { maxAge: 0 });
      response
        .status(200)
        .json({ success: true, message: "User Logout Successfully" });
    } catch (error) {
      console.error(`Error While Loging out: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  updateProfile:async(request, response) => {
    try {
      
      
    } catch (error) {
      console.error(`Error While Updating the Profile: ${error.message} `);
      response.status(500).json({success:false, message:"Internal Server Error"}); 
      
    }
  }
};

export default authController;
