const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: 'asc'
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COST':
            return {
                ...state,tasks: [...state.tasks,action.payload],
                costs: action.payload.amount,
                currentBalance:  state.initialAmount- action.payload.amount

            }
        case "REMOVE_FROM_CART":
            const task = state.tasks[action.payload]
            return {
                ...state, tasks: state.tasks.filter((el,idx) => idx !== action.payload),
                costs: state.costs - task.amount,
                currentBalance: state.currentBalance + task.amount
            }
        case "RESET_ALL":
            return initialState
        default:
            return state
    }
}