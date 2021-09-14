import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://recruitment.ultimate.systems'
});


export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginResponseType>('/auth/local/', data);
    }
};
export type LoginParamsType = {
    identifier: string
    password: string
}

type LoginResponseType = {
    user: UserType,
    code: number,
    message: string
    jwt: string
}

type UserType = {
    "id": number,
    "username": string,
    "email": string,
    "provider": string,
    "confirmed": boolean,
    "created_at": string,
    "updated_at": string
}




