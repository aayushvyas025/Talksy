const authUtils = require("../../utils/auth/auth.util");

const { hashingPassword, comparePasswords } = authUtils;
class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async signup(userInfo = {}) {
    const existingUser = await this.authRepository.findByEmail(userInfo?.email);

    if (existingUser) {
      throw new Error("User already exists in the database");
    }

    const { hashedPassword } = await hashingPassword(userInfo?.password);

    const newUser = await this.authRepository.createUser({
      fullname: userInfo?.fullname,
      email: userInfo?.email,
      password: hashedPassword,
    });

    if (!newUser) {
      throw new Error("Failed to create user");
    }

    return newUser;
  }

  async login(userInfo = {}) {
    const user = await this.authRepository.findByEmail(userInfo?.email);

    if (!user) {
      throw new Error("User don't exists in the database");
    }

    const isPasswordCorrect = await comparePasswords(userInfo?.password, user?.password);

    if (!isPasswordCorrect) {
      throw new Error("Incorrect Password");
    }

    return user;
  }
}

module.exports = AuthService;
