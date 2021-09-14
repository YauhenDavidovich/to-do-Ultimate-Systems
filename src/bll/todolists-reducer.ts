import { Dispatch } from 'redux'
import {todolistsAPI, TodolistType} from "../dll/todolistsApi";

const initialState: Array<TodolistDomainType> = []

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> =>  {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(todos => ({...todos}))
        default:
            return state
    }
}

export const setTodolistsAC = (todolists: Array<TodolistType>) => ({type: 'SET-TODOLISTS', todolists} as const)

// thunks
export const fetchTodolistsTC = () => {
    return (dispatch: ThunkDispatch) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}

// types
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
type ActionsType = SetTodolistsActionType
export type TodolistDomainType = TodolistType
//     & {
//
//     entityStatus: RequestStatusType
// }

type ThunkDispatch = Dispatch<ActionsType>
