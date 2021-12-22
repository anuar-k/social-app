import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store
export default store