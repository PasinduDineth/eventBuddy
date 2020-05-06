// import { signIn, addProduct } from "../SDK"
import HCData from "../../src/products.json"
export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST"
export const PRODUCT_FETCH_SUCCESS = "PRODUCT_FETCH_SUCCESS"
export const PRODUCT_FETCH_FAILURE = "PRODUCT_FETCH_FAILURE"
export const PRODUCT_ADD_TO_CART = "PRODUCT_ADD_TO_CART"
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"


// Product actions
export const productFetchRequest = () => ({
    type: PRODUCT_FETCH_REQUEST
})

export const productFetchSuccess = (content) => ({
    type: PRODUCT_FETCH_SUCCESS,
    content
})

export const productFetchFailure = () => ({
    type: PRODUCT_FETCH_FAILURE
})

export const productAddToCart = (content) => ({
    type: PRODUCT_ADD_TO_CART,
    content
})

export const removeProductFromCart = (content) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    content
})

export const productFetch = (data, push) => (dispatch) => {   
    dispatch(productFetchSuccess(HCData))
    // signIn(data)
    // addProduct(data).then((response) => {
    //         dispatch(loginRequestSuccess(response))
    //         push("/home")
    //     })
    //     .catch(error => {
    //         dispatch(loginRequestFailure())
    //         console.log(error)
    //     })
}
export const addToCart = (data) => (dispatch) => {
    // console.log("fff", HCData);
    
    dispatch(productAddToCart(data))
    // signIn(data)
    // addProduct(data).then((response) => {
    //         dispatch(loginRequestSuccess(response))
    //         push("/home")
    //     })
    //     .catch(error => {
    //         dispatch(loginRequestFailure())
    //         console.log(error)
    //     })
}

export const removeFromCart = (item) => (dispatch) => {
    // console.log("fff", HCData);
    
    dispatch(removeProductFromCart(item))
    // signIn(data)
    // addProduct(data).then((response) => {
    //         dispatch(loginRequestSuccess(response))
    //         push("/home")
    //     })
    //     .catch(error => {
    //         dispatch(loginRequestFailure())
    //         console.log(error)
    //     })
}