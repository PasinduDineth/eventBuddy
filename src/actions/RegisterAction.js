import { signIn, addProduct, signUp } from "../SDK"
export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_REQUEST_SUCCESS = "REGISTER_REQUEST_SUCCESS"
export const REGISTER_REQUEST_FAILURE = "REGISTER_REQUEST_FAILURE"


// Login actions
export const registerRequest = () => ({
    type: REGISTER_REQUEST
})

export const registerRequestSuccess = (content) => ({
    type: REGISTER_REQUEST_SUCCESS,
    content
})

export const registerRequestFailure = (content) => ({
    type: REGISTER_REQUEST_FAILURE,
    content
})

export const register = (data) => (dispatch) => {
    dispatch(registerRequest())
    signUp(data).then((response) => {
            if(response.status) {
                dispatch(registerRequestSuccess({"message":"User Registered succesfully. Please login now."}))
            }
            else {
                console.log("sss", response.message.message)
                dispatch(registerRequestFailure({"message": response.message.message}))
            }
        })
        .catch(error => {
            dispatch(registerRequestFailure({"message": "Server error. Please contact suport."}))
            console.log(error)
        })
}