const { generateToken } = require("../../utils/auth/auth.util");
const userSchema = require("../../validations/auth.validation");

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

      const newUser = await this.authService.userSignup({
        fullname,
        email,
        password,
      });

      generateToken(newUser._id, response);

      return response
        .status(201)
        .json({ success: true, message: "User signup successfully" });
    } catch {
      console.error(`Error, while signed-up user: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  async userLogin(request, response) {}

  async userLogout(request, response) {}
}

module.exports = AuthController;
