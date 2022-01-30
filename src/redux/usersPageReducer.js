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
            return {...state, isFetching:  action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})

export default usersPageReducer

