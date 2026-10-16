const authValidation = require("../../validations/auth.validation");
const authUtils = require("../../utils/auth/auth.util");

const { userSchema, loginSchema } = authValidation;
const { generateToken, clearToken } = authUtils;

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async userSignup(request, response) {
    try {
      const result = userSchema.safeParse(request.body);
      if (!result.success) {
        return response
          .status(400)
          .json({ success: false, message: result.error.issues[0].message });
      }

      const { fullname, email, password } = result.data;

      const newUser = await this.authService.signup({
        fullname,
        email,
        password,
      });

      generateToken(newUser._id, response);

      return response.status(201).json({
        success: true,
        message: "User signup successfully",
        newUser: {
          fullname: newUser?.fullname,
          email: newUser?.email,
          profilePic: newUser?.profilePic,
        },
      });
    } catch (error) {
      console.error(`Error, while signing-up user: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  async userLogin(request, response) {
    try {
      const result = loginSchema.safeParse(request.body);

      if (!result.success) {
        return response
          .status(400)
          .json({ success: false, message: result.error.issues[0].message });
      }

      const { email, password } = result.data;

      const user = await this.authService.login({ email, password });

      generateToken(user._id, response);

      return response.status(200).json({
        success: true,
        message: "User login successfully",
        user: {
          fullname: user.fullname,
          email: user.email,
          profilePic: user.profilePic,
        },
      });
    } catch (error) {
      console.error(`Error, while login user: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  async userLogout(_, response) {
    try {
      clearToken("JWT_TOKEN", response);

      return response
        .status(200)
        .json({ success: true, message: "User logout successfully" });
    } catch (error) {
      console.error(`Error, while logout user: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
}

module.exports = AuthController;
