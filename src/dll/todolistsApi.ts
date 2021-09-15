import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://recruitment.ultimate.systems',
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
});


export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>('/to-do-lists', );
    },
    createTodolist(data: CreateTodoType) {
        return instance.post<TodolistType>('to-do-lists', data);
    },

};
export type ToDosRequestParamsType = {
    _limit?: number,
    _sort?: string,
    _start?: number,
    "="?: string,
    _ne?: string,
    _lt?: string,
    _lte?: string,
    _gt?: string,
    _gte?: string,
    _contains?: string,
    _in?: Array<string>,
    _nin?: Array<string>,
}

export type CreateTodoType = {
    "name": string,
    "task": TaskType[]
}

export type TodolistType = {
    id: string
    name: string
    user: string
    published_at: Date
    created_by: string
    updated_by: string
    task: TaskType[]
}

export type TaskType = {
    id: string,
    name: string,
    isDone: boolean
}




export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
