
const INITIAL_STATE = {
    USER_EMAIL: "",
    SESSION_KEY: "",
    isLoading: false
}
export default(state = INITIAL_STATE, payload) => {   
    switch(payload.type){
        case "LOGIN_REQUEST":
            return {...state, isLoading: true}
        default:
            return state
    }
}