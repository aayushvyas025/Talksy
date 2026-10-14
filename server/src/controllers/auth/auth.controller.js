class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async userSignup(request, response) {}

  async userLogin(request, response) {}

  async userLogout(request, response) {}
} 

module.exports = AuthController; 


