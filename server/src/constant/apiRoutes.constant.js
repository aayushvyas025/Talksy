const apiRoutes = Object.freeze({
  baseUrl: "/talksy/api/v1",
  auth: {
    signup: "/auth/signup",
    login: "/auth/login",
    logout: "/auth/logout",
  },
  user: {
    fetch_users: "/user/fetch",
    fetch_user_id: "/user/fetch/:id",
    update_profile: "/user/profile/update",
    user_authenticated: "/user/authenticated",
    user_account_deleted: "/user/delete/:id",
  },
  messages: {
    send_message: "/message/send",
    receive_message: "/message/received",
  },
});

export default apiRoutes;
