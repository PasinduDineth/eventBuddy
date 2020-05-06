import login from "./LoginReducer"
import product from "./ProductReducer"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
    product,
    login})
export default rootReducer;