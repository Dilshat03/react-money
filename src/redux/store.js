import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducer";
import {tasksReducer} from "./reducers/tasksReducer";


export const store = createStore(combineReducers({
    user: userReducer,
    task:tasksReducer
}),composeWithDevTools(applyMiddleware()))