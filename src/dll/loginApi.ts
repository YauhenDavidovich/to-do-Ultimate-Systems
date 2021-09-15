import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://recruitment.ultimate.systems'
});


export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginResponseType>('/auth/local/', data);
    },
    logout() {
        return instance.delete<ResponseType<ResponseMeType>>('/auth/local/');
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
    "created_at": Date,
    "updated_at": Date
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

type ResponseMeType = {
    id: number
    email: string
    login: string
}
