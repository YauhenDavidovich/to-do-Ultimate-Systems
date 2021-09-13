import {Dispatch} from 'redux'
import {loginAPI, LoginParamsType} from "../dll/loginApi";

const initialState = {
    username: "",
    id: 0,
    isLogin: false
}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGIN':
            return {...state, username: action.username, id: action.id, isLogin: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoginAC = (username: string, id: number, value: boolean) =>
    ({type: 'login/SET-IS-LOGIN', username, id, value } as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data)
        .then(res => {
            if (res.data.code === 0) {
                alert(res.data.message)
            }
            dispatch(setIsLoginAC(res.data.user.username, res.data.user.id, true ))
        })
        .catch((error) => {
            alert(error)
        })
}


// types
type ActionsType = ReturnType<typeof setIsLoginAC>


