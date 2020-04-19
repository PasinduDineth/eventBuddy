
const INITIAL_STATE = {
    USER_EMAIL: "",
    SESSION_TOKEN: "",
    USERID: "",
    isLoading: false,
    isLoggedIn: false
}
export default(state = INITIAL_STATE, payload) => {   
    switch(payload.type){
        case "LOGIN_REQUEST":
            return {...state, isLoading: true}
        case "LOGIN_REQUEST_SUCCESS":
            return {
                ...state, 
                isLoading: false, 
                USER_EMAIL: payload.content.get("email"),
                SESSION_TOKEN: payload.content.get("sessionToken"), 
                isLoggedIn: true,
                USERID: payload.content.id
            }
        default:
            return state
    }
}