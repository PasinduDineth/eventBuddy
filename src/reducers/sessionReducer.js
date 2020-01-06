
const INICIAL_STATE = {
    count: 0
}
export default(state = INICIAL_STATE, payload) => {
    switch(payload){
        case "add":
            return [...state, payload.item]
        default:
            return state
    }
}