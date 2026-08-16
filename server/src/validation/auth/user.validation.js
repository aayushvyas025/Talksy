export const userInfoValidation = function ({ fullName, email, password }) {
  if (typeof fullName !== "string" || !fullName.trim()) {
    return { isValid: false, field: "full name" };
  }

  if (typeof email !== "string" || !email.includes("@") || !email.trim()) {
    return { isValid: false, field: "email" };
  }

  if (typeof password !== "string" || password.length < 6 || !password.trim()) {
    return {
      isValid: false,
      field:
        password.length < 6 ? "Password must be at least 6 characters long" : "password",
    };
  }

  return { isValid: true, field: null };
};
 

export const validateLoginUser = function({email, password}) {
   if (typeof email !== "string" || !email.includes("@") || !email.trim()) {
    return { isValid: false, field: "email" };
  }

  if (typeof password !== "string" || password.length < 6 || !password.trim()) {
    return {
      isValid: false,
      field:
        password.length < 6 ? "Password must be at least 6 characters long" : "password",
    };
  } 

  return {isValid:true, field:null}
}