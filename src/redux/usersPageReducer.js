import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? ({...user, followed: !user.followed}) : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? ({...user, followed: !user.followed}) : user)
            }
        case SET_USERS:
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching:  action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching , userId})

// thunkCreator
export const getUsers = (currentPage, pageSize) => (dispatch)=> {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
        dispatch(setCurrentPage(currentPage))
    })
}
//thunk for follow
export const follow = (userId) => (dispatch)=> {
 dispatch(toggleFollowingInProgress(true, userId))
 usersAPI.follow(userId)
        .then(response => {
           if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
             }
     })
    dispatch(toggleFollowingInProgress(false, userId))
}
//thunk for unfollow
export const unFollow = (userId) => (dispatch)=> {
     dispatch(toggleFollowingInProgress(true, userId))
     usersAPI.unFollow(userId)
     .then(response => {
                     if (response.data.resultCode === 0) {
                         dispatch(unfollowSuccess(userId))
                     }
                 })
    dispatch(toggleFollowingInProgress(false, userId))
}

export default usersPageReducer