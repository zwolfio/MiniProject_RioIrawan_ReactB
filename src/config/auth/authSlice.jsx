import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    isLogin : false,
    userid : ''
};

const authSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
            login : (state, action) => {
                return {
                        ...state,
                        isLogin: action.payload,
                };
            },
            id : (state, action) => {
                return {
                        ...state,
                        userid: action.payload,
                };
            },
    },

});

export const {actions = loginAction} = authSlice;
export default authSlice;
