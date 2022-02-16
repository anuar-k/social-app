import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "4f2b5e68-431a-4dc8-b1a1-9bf00cd0e4de"
    }
})
export const usersAPI = {
    getUsers(currentPage, pageSize=2) {
        return instance.get(`users?term=Aa&page=${currentPage}&count=${pageSize}`).then(response => response.data)
        // return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId){
        return  instance.post(`follow/${userId}`)
    },
    unFollow(userId){
       return  instance.delete(`follow/${userId}`)
    },
    getProfile(profileId){
        console.warn("Using deprecated usersAPI method. Please use profileAPI method")
        return profileAPI.getProfile(profileId)
    }
}
export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status})
    }
}

export const authAPI = {
    me(){
      return instance.get(`auth/me`)
    }
}