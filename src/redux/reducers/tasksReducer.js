
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
                currentBalance:  state.currentBalance - +action.payload.amount,
                costs: state.costs + +action.payload.amount

            }
        case "REMOVE_FROM_CART":
            const task = state.tasks[action.payload]
            return {
                ...state, tasks:
                    state.tasks.filter((el,idx) => idx !== action.payload),
                currentBalance: state.currentBalance + +task.amount,
                costs: state.costs - +task.amount
            }
        case "RESET_ALL":
            return initialState
        case 'SORT_TASKS':
             state.tasks.sort((a,b)=>{
                return state.sort === 'asc' ? a.amount - b.amount : b.amount - a.amount
            })
        return {...state,tasks: [...state.tasks],sort: state.sort === 'asc'? 'desc':'asc'}
        default:
            return state
    }
}