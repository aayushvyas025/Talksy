const commonConstant = Object.freeze({
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
         LOGIN_USER:`/auth/login`,
         UPDATE_PROFILE:`/auth/update-profile`
    },
    messages: {
       GET_USERS:`/message/users`,
        GET_MESSAGES:(id) => `/message/${id}`,
        CREATE_MESSAGES:(id) => `/message/sender/${id}`
    }

  }
});

export default commonConstant;
