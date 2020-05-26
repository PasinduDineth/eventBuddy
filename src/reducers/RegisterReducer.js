
const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    registerMessage: ""
}
export default(state = INITIAL_STATE, payload) => {   
    switch(payload.type){
        case "REGISTER_REQUEST":
            return {...state, isLoading: true, isError: true}
        case "REGISTER_REQUEST_SUCCESS":
                return {
                    ...state, 
                    isLoading: false,
                    registerMessage: payload.content.message,
                    isError: false
                }
        case "REGISTER_REQUEST_FAILURE":
            return {...state, isLoading: false, registerMessage: payload.content.message, isError: true}    
        default:
            return state
    }
}