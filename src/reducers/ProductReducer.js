
const INITIAL_STATE = {
    initialProductList: [],
    cart: [],
    isLoading: false,
    isLoggedIn: false
}
export default(state = INITIAL_STATE, payload) => {   
    switch(payload.type){
        case "PRODUCT_FETCH_REQUEST":
            return {...state, isLoading: true}
        case "PRODUCT_FETCH_SUCCESS":
            return {
                ...state, 
                initialProductList: payload.content
            }
        case "PRODUCT_ADD_TO_CART":
            const selected = state.cart.find(odr => odr.uniqueID.name === payload.content.uniqueID.name)

            if(selected){
                // already have in inner state, send to reducer
                const filtered = state.cart.filter(odr => odr.uniqueID.name !== payload.content.uniqueID.name)
                const updated = {...selected, ...payload.content}              
                return {
                    ...state,
                    cart: filtered.concat([updated])
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.concat([payload.content])
                }
            }
        case "REMOVE_PRODUCT_FROM_CART":
            const filtered = state.cart.filter((itm) => itm.uniqueID.name !== payload.content)
            return {
                ...state,
                cart: filtered
            }
            
        default:
            return state
    }
}