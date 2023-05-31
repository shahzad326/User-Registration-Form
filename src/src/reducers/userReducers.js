import { USER_LOGIN_REQUEST,USER_LOGIN_SUCESS,USER_LOGIN_FAIL,USER_LOGOUT,
         USER_SIGNUP_FAIL,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCESS } from '../constants/userConstants'
export const userLoginReducer = (state={userInfo:[]},action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true,...state}
        case USER_LOGIN_SUCESS:
            return {loading:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userSignupReducer = (state={userInfo:[]},action) => {
    switch(action.type){
        case USER_SIGNUP_REQUEST:
            return {loading:true,...state}
        case USER_SIGNUP_SUCESS:
            return {loading:false,...state,userInfo:action.payload}
        case USER_SIGNUP_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}