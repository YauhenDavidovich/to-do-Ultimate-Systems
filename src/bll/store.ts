import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {registrationReducer} from "./registration-reducer";
import {loginReducer} from "./login-reducer";


const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    todolists: todolistsReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
