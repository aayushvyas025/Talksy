const baseUrl = `/api/v1`;

const commonConstant = Object.freeze({
  envVariables: {
    backendUrl:
      import.meta.env.VITE_FRONTEND_MODE === "development"
        ? import.meta.env.VITE_BACKEND_URL
        : "/",
  },
  apis: {
    auth: {
         USER_AUTHENTICATED:`${baseUrl}/auth/check-auth`,
         SIGNUP_USER:`${baseUrl}/auth/signup`,
         LOGOUT_USER:`${baseUrl}/auth/logout`,
         LOGIN_USER:`${baseUrl}/auth/login`,
         UPDATE_PROFILE:`${baseUrl}/auth/update-profile`
    },
    messagesEndPoint: {
       GET_USERS:`${baseUrl}/message/users`,
        GET_MESSAGES:(id) => `${baseUrl}/message/${id}`,
        CREATE_MESSAGES:(id) => `${baseUrl}/message/sender/${id}`
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
