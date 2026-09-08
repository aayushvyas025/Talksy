export function validateUserInfo({ fullName, email, password }) {
  if (typeof fullName !== "string" || !fullName.trim()) {
    return { success: false, field: "fullname" };
  }

  if (typeof email !== "string" || !email.includes("@") || !email.trim()) {
    return { success: false, field: "email" };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return { success: false, field: "password" };
  }

  return { success: true, field: null };
}

export function validateUserCredentials({ email, password }) {
  if (typeof email !== "string" || !email.includes("@") || !email.trim()) {
    return { success: false, field: "email" };
  }

  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return { success: false, field: "password" };
  }

  return { success: true, field: null };
}
