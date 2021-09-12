import { Dispatch } from 'redux'
import {authAPI, RegisterParamsType} from "../dll/registerApi";

const initialState = {
    isRegistered: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'register/SET-IS-REGISTERED':
            return {...state, isRegistered: action.value}
        default:
            return state
    }
}
// actions
export const setIsRegisteredAC = (value: boolean) =>
    ({type: 'register/SET-IS-REGISTERED', value} as const)

// thunks
export const registerTC = (data: RegisterParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.register(data)
        .then(res => {
            if (res.data.confirmed === true) {
                dispatch(setIsRegisteredAC(true))

            } else {
                alert(res.data);
            }
        })
        .catch((error) => {
            alert(error)
        })

}


// types
type ActionsType = ReturnType<typeof setIsRegisteredAC>


