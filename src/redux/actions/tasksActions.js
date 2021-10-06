
export const tasksActions = (data) =>{
    return {type:'ADD_COST',payload:data}
}


export const removeFromCart = (el) => {
    return {type:'REMOVE_FROM_CART' , payload: el.id}
}