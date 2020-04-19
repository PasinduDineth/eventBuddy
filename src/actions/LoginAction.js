export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE"

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

export const login = (data) => (dispatch) => {
    console.log("d", data);
    dispatch(loginRequest())
    // BackendClient.getLoginContent()
    //     .then(({ data }) => {
    //         dispatch(fetchLoginContentSuccess(data))
    //     })
    //     .catch(error => {
    //         dispatch(fetchLoginContentFailure())
    //         console.log(error)
    //     })
}