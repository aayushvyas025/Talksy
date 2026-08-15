export const userInfoValidation = function ({ fullName, email, password }) {
  if (typeof fullName !== "string" || !fullName.trim()) {
    return { isValid: false, field: "full name" };
  }

  if (typeof email !== "string" || !email.includes("@") || !email.trim()) {
    return { isValid: false, field: "email" };
  }

  if (typeof password !== "string" || password.length < 6 || !password.trim()) {
    return { isValid: false, field: "password" };
  }

  return { isValid: true, field: null };
};
