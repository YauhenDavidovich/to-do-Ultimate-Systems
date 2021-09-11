import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://recruitment.ultimate.systems/',
    withCredentials: true
});


export const authAPI = {
    register(data: RegisterParamsType) {
        return instance.post<RegisterResponseType>('auth/login', data);
    }
};
export type RegisterParamsType = {
    username: string
    email: string
    password: string
}

type RegisterResponseType = {
    "id": "string",
    "username": "string",
    "email": "string",
    "provider": "string",
    "confirmed": false,
    "blocked": false,
    "role": {
        "id": "string",
        "name": "string",
        "description": "string",
        "type": "string",
        "permissions": [
            "string"
        ],
        "users": [
            "string"
        ],
        "created_by": "string",
        "updated_by": "string"
    },
    "to_do_lists": [
        {
            "id": "string",
            "name": "string",
            "task": "Unknown Type: component",
            "user": "string",
            "published_at": "string",
            "created_by": "string",
            "updated_by": "string"
        }
    ]
}





