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
    messagesEndPoint: {
       GET_USERS:`/message/users`,
        GET_MESSAGES:(id) => `/message/${id}`,
        CREATE_MESSAGES:(id) => `/message/sender/${id}`
    }

  },
  applicationThemes: [
    "light",
      "dark",
      "cupcake",
      "bumblebee",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
  ],
  previewMessages:[
    {id:1, content:"Hey! How it's going?", isSent:false},
    {id:2, content:"I'm doing great! Just working on some new features.", isSent:false}
  ],
});

export default commonConstant;
