import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

export type InitialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state, initialized: true
            }
        }
        default:
            return state
    }
}
export type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const setInitializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())


    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })
}

export default appReducer