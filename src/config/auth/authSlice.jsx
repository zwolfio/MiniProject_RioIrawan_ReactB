import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    isLogin : true,
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
    },

});

export const {actions = loginAction} = authSlice;
export default authSlice;
