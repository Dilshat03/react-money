
export const tasksActions = (data) =>{
    return {type:'ADD_COST',payload:data}
}


export const removeFromCart = (idx) => {
    return {type:'REMOVE_FROM_CART' , payload: idx}
}


export const resetAll = () =>{
    return {type:"RESET_ALL"}
}