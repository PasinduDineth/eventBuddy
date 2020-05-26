import login from "./LoginReducer"
import register from "./RegisterReducer"
import product from "./ProductReducer"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
    product,
    login,
    register})
export default rootReducer;