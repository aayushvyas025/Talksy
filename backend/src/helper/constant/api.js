const API = {
    messages: {
        BASE_URL:`/api/v1/message`,
        GET_USERS: `/users`,
        GET_MESSAGES:`/:id`,
        CREATE_MESSAGES:`/sender/:id`
    },
    auth:{
        BASE_URL:`/api/v1/auth`,
        SIGN_UP:`/signup`,
        LOGIN:`/login`,
        LOGOUT:`/logout`,
        UPDATE_PROFILE:`/update-profile`,
        USER_AUTHENTICATED:`/check-auth`
    }
}

export default API; 