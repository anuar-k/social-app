import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED"

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state, initialized: true
            }
        }

        default:
            return state
    }
}

const setInitializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    // dispatch()
    Promise.all([promise]).then(()=>{
        dispatch(setInitializedSuccess())
    })
}

export default appReducer