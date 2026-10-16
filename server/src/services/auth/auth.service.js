const { hashingPassword } = require("../../utils/auth/auth.util");

class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async userSignup(userInfo = {}) {
    const existingUser = await this.authRepository.findByEmail(userInfo?.email);

    if (existingUser) {
      throw new Error("User already exist in Database");
    }

    const { hashedPassword } = await hashingPassword(userInfo?.password);

    const newUser = await this.authRepository.createUser({
      fullname: userInfo?.fullname,
      email: userInfo?.email,
      password: hashedPassword,
    });

    if (!newUser) {
      throw new Error("Error, invalid user data");
    } 

    return newUser;
  }
}
