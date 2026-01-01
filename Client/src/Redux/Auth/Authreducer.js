import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading: false,
    isAuth: false,
    User: null,
    isError: null
}

export const AuthSlice = createSlice({
    name: "AuthDetails",
    initialState,
    reducers: {
        SignupStart: (state) => {
            state.isloading = true
        },
        SignupSuccess: (state) => {
            state.isloading = false
        },
        SignupFaild: (state, action) => {
            state.isloading = false,
                state.isError = action.payload
        },
        OTPVerifyStart: (state) => {
            state.isloading = true
        },
        OTPVerifySuccess: (state, action) => {
            state.isloading = false,
                state.User = action.payload,
                state.isError = null
        },
        OTPVerifyFaild: (state, action) => {
            state.isloading = false,
                state.isAuth = false,
                state.User = null,
                state.isError = action.payload
        },
        SigninStart: (state, action) => {
            state.isloading = true
        },
        SigninSucess: (state, action) => {
            state.isloading = false,
                state.isAuth = true,
                state.User = action.payload,
                state.isError = null
        },
        Signinlogout:(state,action)=>{
            state.isloading=false,
            state.isAuth=false,
            state.User=action.payload,
            state.isError=null
        },
        SigninFaild: (state, action) => {
            state.isloading = false,
                state.isAuth = false,
                state.User = null,
                state.isError = action.payload
        },
        EmverifyStart: (state, action) => {
            state.isloading = true
        },
        EmverifySucces: (state, action) => {
            state.isloading = false
        },
        EmverifyFaild: (state, action) => {
            state.isloading = false,
                state.isError = action.payload
        },
        ResetpasswordStart: (state, action) => {
            state.isloading = true
        },
        ResetpasswordSuccess: (state, action) => {
            state.isloading = false
        },
        ResetpasswordFaild: (state, action) => {
            state.isloading = false,
                state.isError = action.payload
        }
    }
})

export const { ResetpasswordStart,Signinlogout, ResetpasswordSuccess, ResetpasswordFaild ,SignupStart, SignupSuccess, SignupFaild, OTPVerifyStart, OTPVerifySuccess, OTPVerifyFaild, SigninSucess, SigninStart, SigninFaild, EmverifyStart, EmverifySucces, EmverifyFaild } = AuthSlice.actions;

export default AuthSlice.reducer;
