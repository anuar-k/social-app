import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./profileReducer";
import dialogPageReducer from "./dialogReducer";
import usersPageReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: authReducer
})

type RootReducerType = typeof rootReducer // globalState: state => globalState
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store

export default store