const apiRoutes = Object.freeze({
  auth: {
    authBaseUrl: "/talksy/api/v1/auth",
    signup: "/signup",
    login: "/login",
    logout: "/logout",
  },
  user: {
    userBaseUrl: "/talksy/api/v1/user",
    fetch_users: "/fetch",
    update_profile:"/profile/update",
  },
  messages:{
    messageBaseUrl:'/talksy/api/v1/message'
  }
});

export default apiRoutes;
