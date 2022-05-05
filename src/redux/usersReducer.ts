import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "users/SET_TOTAL_USER_COUNT"
const SET_IS_FETCHING = "users/SET_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"
const FOLLOW_UNFOLLOW_TOGGLE = "users/FOLLOW_UNFOLLOW_TOGGLE"

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users ids
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? ({...user, followed: !user.followed}) : user)
            }
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
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId) as any
            }
        default:
            return state
    }
}

type FollowUnfollowSuccessActionType = {
    type: typeof FOLLOW_UNFOLLOW_TOGGLE
    userId: number
}
export const followUnfollowSuccess = (userId: number): FollowUnfollowSuccessActionType => ({
    type: FOLLOW_UNFOLLOW_TOGGLE,
    userId
})
type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType
}
export const setUsers = (users: UserType): SetUsersActionType => ({type: SET_USERS, users})
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USER_COUNT
    count: number
}
export const setTotalUserCount = (count: number): SetTotalUserCountActionType => ({type: SET_TOTAL_USER_COUNT, count})
type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({type: SET_IS_FETCHING, isFetching})
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

// thunkCreator
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(setCurrentPage(currentPage));
}
//other method for follow and unFollow thunk
export const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(followUnfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}
//thunk for follow
export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI))
}
//thunk for unfollow
export const unFollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI))
}

export default usersReducer