const commonConstant = {
  envVariables: {
    backendUrl:
      import.meta.env.VITE_FRONTEND_MODE === "development"
        ? import.meta.env.VITE_BACKEND_URL
        : "/api/v1",
  },
  apis: {
    auth: {
         USER_AUTHENTICATED:`/auth/check-auth`,
         SIGNUP_USER:`/auth/signup`,
         LOGOUT_USER:`/auth/logout`,
         LOGIN_USER:`/auth/login`
    }

  }
};

export default commonConstant;
