const authUtils = require("../../utils/auth/auth.util");

const { hashingPassword, comparePasswords } = authUtils;
class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async signup(userInfo = {}) {
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

  async login(userInfo = {}) {
    const user = await this.authRepository.findByEmail(userInfo?.email);

    const isPasswordCorrect = await comparePasswords(
      password,
      userInfo.password,
    );

    if (!isPasswordCorrect) {
      throw new Error("Incorrect Password");
    }

    return user;
  }
}
