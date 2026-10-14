class AuthValidation {
  static validator(fullname, email, password, type) {
    if (type === "signup"(typeof fullname !== "string" || !fullname.trim())) {
      return {
        isValid: false,
        message: "Full name is required",
      };
    }

    if (
      typeof email !== "string" ||
      !email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return {
        isValid: false,
        message: "A valid email is required",
      };
    }

    if (
      typeof password !== "string" ||
      !password.trim() ||
      (type === "signup" && password.length < 6)
    ) {
      return {
        isValid: false,
        message: "Password must be at least 6 characters long",
      };
    }

    return { isValid: true };
  }
}

module.exports = AuthValidation;
