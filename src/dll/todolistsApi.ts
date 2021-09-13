import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://recruitment.ultimate.systems'
});


export const todolistsAPI = {
    getTodolists(todos: ToDosRequestParamsType) {
        return instance.post<TodolistType[]>('/to-do-lists', {...todos});
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



export type TodolistType = {
    id: string
    name: string
    published_at: string
}



