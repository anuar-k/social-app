import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    newPostText: "default text",
    profile: null,
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
    ],
    index: 10,
    status: null
};

const profilePageReducer = (state = initialState, action) => {
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
        default :
            return state
    }
}

export const updatePostActionCreator = (newText) => ({type: UPDATE_POST, text: newText})
export const addPostActionCreator = (postBody) => ({type: ADD_POST, postBody})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//thunk for getProfile
export const getProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setProfile(response.data))
}
//thunk for getStatus
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

//thunk for updateStatus
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}
export default profilePageReducer