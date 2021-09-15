import { Dispatch } from 'redux'
import {CreateTodoType, todolistsAPI, TodolistType, ToDosRequestParamsType} from "../dll/todolistsApi";

const initialState: Array<TodolistDomainType> = []

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> =>  {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(todos => ({...todos}))
        case 'ADD-TODOLIST':
            return [{...action.todolist}, ...state]
        default:
            return state
    }
}

export const setTodolistsAC = (todolists: Array<TodolistType>) => ({type: 'SET-TODOLISTS', todolists} as const)
export const addTodolistAC = (todolist: TodolistType) => ({type: 'ADD-TODOLIST', todolist} as const)


// thunks
export const fetchTodolistsTC = (data: ToDosRequestParamsType) => {
    return (dispatch: ThunkDispatch) => {
        todolistsAPI.getTodolists(data)
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}
export const addTodolistTC = (todo: CreateTodoType) => {
    return (dispatch: ThunkDispatch) => {
        todolistsAPI.createTodolist(todo)
            .then((res) => {
                dispatch(addTodolistAC(res.data))
            })
    }
}
// types
export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
export type AddTodolistsActionType = ReturnType<typeof addTodolistAC>;
type ActionsType = SetTodolistsActionType | AddTodolistsActionType
export type TodolistDomainType = TodolistType
//     & {
//
//     entityStatus: RequestStatusType
// }

type ThunkDispatch = Dispatch<ActionsType>
