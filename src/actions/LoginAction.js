import { signIn } from "../SDK"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE"


// Login actions
export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginRequestSuccess = (content) => ({
    type: LOGIN_REQUEST_SUCCESS,
    content
})

export const loginRequestFailure = () => ({
    type: LOGIN_REQUEST_FAILURE
})

export const login = (data, push) => (dispatch) => {
    dispatch(loginRequest())
    signIn(data)
        .then((response) => {
            dispatch(loginRequestSuccess(response))
            push("/home")
        })
        .catch(error => {
            dispatch(loginRequestFailure())
            console.log(error)
        })
}