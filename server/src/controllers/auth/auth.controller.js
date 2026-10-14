class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async userSignup(request, response) {
    try {
      const { fullname, email, password } = request.body;
    } catch {
      console.error(`Error, while signed-up user: ${error.message}`);
    }
  }

  async userLogin(request, response) {}

  async userLogout(request, response) {}
}

module.exports = AuthController;
