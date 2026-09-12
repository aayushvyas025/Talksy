export function validateUserInfo({ formState, fullName, email, password }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formState === "signup") {
    if (typeof fullName !== "string" || !fullName.trim()) {
      return { success: false, field: "fullname required" };
    }
  }
  if (
    typeof email !== "string" ||
    !emailRegex.test(email.trim()) ||
    !email.trim()
  ) {
    return {
      success: false,
      field:
        typeof email !== "string" || !email.trim()
          ? "email required"
          : "email invalid format",
    };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return {
      success: false,
      field:
        typeof password !== "string" || !password.trim()
          ? "password required"
          : "password must be 6 character long",
    };
  }

  return { success: true, field: null };
}

export function validateUserInput(input, field) {
  if (typeof input !== "string" || !input.trim()) {
    return { success: false, field: `${field} required` };
  }

  return { success: true, field: null };
}
