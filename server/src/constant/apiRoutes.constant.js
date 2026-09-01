const apiRoutes = Object.freeze({
  baseUrl: "/talksy/api/v1",
  auth: {
    signup: "/auth/signup",
    login: "/auth/login",
    logout: "/auth/logout",
  },
  user: {
    fetch_users: "/user/fetch",
    update_profile:"/user/profile/update",
    user_authenticated:"/user/authenticated"
  },
  messages:{
  }
});

export default apiRoutes;
