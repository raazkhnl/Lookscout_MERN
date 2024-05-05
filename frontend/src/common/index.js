const backendUrl = process.env.REACT_APP_BACKEND_URL
const SummaryApi = {
    contactUs : {
        url : `${backendUrl}api/contact-us`,
        method : "post"
    },
    signUp : {
        url : `${backendUrl}api/signup`,
        method : "post"
    },
    logIn : {
        url : `${backendUrl}api/login`,
        method : "post"
    },
    forgotPassword : {
        url : `${backendUrl}api/forgot-password`,
        method : "put"
    },
    current_user : {
        url : `${backendUrl}api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendUrl}api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendUrl}api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backendUrl}api/update-user`,
        method : "post"
    },
}

export default SummaryApi