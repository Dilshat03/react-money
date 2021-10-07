const initialState = {
    name: '',
    modalIsOpen: true,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER_NAME' :
            return {
                ...state, name: action.payload,
                modalIsOpen: false
            }
        default:
            return state
    }
}