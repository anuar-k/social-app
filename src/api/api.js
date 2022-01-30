import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "5b25a2dd-cfbb-4e37-8bf1-24b94943c959"
    }
})
export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?term=Aa&page=${currentPage}&count=${pageSize}`).then(response => response.data)
}