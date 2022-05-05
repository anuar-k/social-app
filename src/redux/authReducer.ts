import {authAPI, securityAPI,} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS"

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | false,
    captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: "ada",
                isAuth: action.payload.isAuth,
                ...action.payload
            }
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        default :
            return state
    }
}

type SetAuthUserDataActionPayloadType = { userId: number | null, email: string | null, login: string | null, isAuth: boolean }

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

type SetCaptchaUrl = {
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrl => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

//thunk creator
export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) dispatch(getCaptchaUrl())
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaURI()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export default authReducer