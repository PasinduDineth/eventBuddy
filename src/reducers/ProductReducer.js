
const INITIAL_STATE = {
    initialProductList: [],
    cart: [],
    isLoading: false,
    isLoggedIn: false,
    total: 0
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
            const productPrice = payload.content.amount * payload.content.uniqueID.price
            if(selected){
                // already have in inner state, send to reducer
                const filtered = state.cart.filter(odr => odr.uniqueID.name !== payload.content.uniqueID.name)
                const updated = {...selected, ...payload.content}
                const tempPrice = (state.total + productPrice) - (selected.uniqueID.price * selected.amount)

                return {
                    ...state,
                    cart: filtered.concat([updated]),
                    total: tempPrice
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.concat([payload.content]),
                    total: state.total + productPrice
                }
            }
        case "REMOVE_PRODUCT_FROM_CART":
            const filtered = state.cart.filter((itm) => itm.uniqueID.name !== payload.content)
            const specificItem = state.cart.find((itm) => itm.uniqueID.name === payload.content)
            const productPriceRemove = specificItem.amount * specificItem.uniqueID.price
            return {
                ...state,
                cart: filtered,
                total: state.total - productPriceRemove
            }
            
        default:
            return state
    }
}