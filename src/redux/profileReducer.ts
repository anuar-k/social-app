import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "profile/ADD_POST"
const UPDATE_POST = "profile/UPDATE_POST"
const SET_PROFILE = "profile/SET_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_INFO_SUCCESS = "profile/SAVE_PROFILE_INFO_SUCCESS"

const initialState = {
    newPostText: "default text",
    profile: null as ProfileType | null,
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 4
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 10
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 5
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 12
        },
        {
            id: 5,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 90
        }
    ] as Array<PostType>,
    index: 10,
    status: "",
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.index, message: action.postBody, likesCount: 0}],
                index: ++state.index
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case SAVE_PROFILE_INFO_SUCCESS: {
            return {...state, profile: {...state.profile, ...action.profileInfo}}
        }
        default :
            return state
    }
}
type UpdatePostActionCreatorActionType = {
    type: typeof UPDATE_POST
    text: string
}
export const updatePostActionCreator = (newText: string): UpdatePostActionCreatorActionType => ({
    type: UPDATE_POST,
    text: newText
})

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    postBody: string
}
export const addPostActionCreator = (postBody: string): AddPostActionCreatorActionType => ({type: ADD_POST, postBody})

type SetProfileActionType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

type SaveProfileSuccessActionType = {
    type: typeof SAVE_PROFILE_INFO_SUCCESS
    profileInfo: PhotosType
}
export const saveProfileSuccess = (profileInfo: string) => ({type: SAVE_PROFILE_INFO_SUCCESS, profileInfo})

//thunk for getProfile
export const getProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setProfile(response.data))
}
//thunk for getStatus
export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
//thunk for updateStatus
export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
//thunk for savePhoto
export const savePhoto = (photo: string) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
//thunk for saveProfileInfo
export const saveProfileInfo = (profileInfo: string) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        // const length = (response.data.messages[0].split("->")[1]).length - 1
        // const n = (response.data.messages[0].split("->")[1]).substring(0, length) + ""
        // dispatch(stopSubmit("profileInfo"), {
        //     "contacts.facebook": "errr"
        // });
        dispatch(stopSubmit("profileInfo"), {_error: "dadadad"});
        return Promise.reject(response.data.messages[0])
        // console.log((response.data.messages[0].split("->")[1]).substring(0, length))
        // dispatch(stopSubmit("profileInfo"), {_error: (response.data.messages[0].split("->")[1]).substring(0, length)})
        // const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        // dispatch(stopSubmit("profileInfo", {_error: message}))
        // dispatch(stopSubmit("profileInfo"), {_error: response.data.messages[0]})
    }
}

export default profileReducer