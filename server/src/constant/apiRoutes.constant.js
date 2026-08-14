const apiRoutes = Object.freeze({
  auth: {
    authBaseUrl: "/talksy/api/v1/auth",
    signup: "/signup",
    login: "/login",
    logout: "/logout",
  },
  user: {
    userBaseUrl: "/talksy/api/v1/user",
    get_users: "/fetch",
    get_user_id: "/fetch:id",
    create_users: "/create",
    update_user: "/update:id",
    delete_user: "/delete:id",
  },
  messages:{
    messageBaseUrl:'/talksy/api/v1/message'
  }
});

export default apiRoutes;
