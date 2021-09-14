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



