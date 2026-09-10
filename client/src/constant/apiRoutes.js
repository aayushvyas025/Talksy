const apiRoutes = Object.freeze({
 auth:{
    CHECK_AUTH:'/user/authenticated',
    SIGNUP_USER:'auth/signup',
    LOGIN_USER:'/auth/login',
    LOGOUT_USER:"/auth/logout",
    UPDATE_PROFILE:"/user/profile/update",
    DELETE_USER:"/user/delete"
 }
})


export default apiRoutes 