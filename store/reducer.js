const initialState = {
    user: {},
    text: "HELLO WORLD"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_TEXT":
            return {
                ...state, text: "HELLO CLICKER"
            }
        default:
            return state
    }
}

export default reducer