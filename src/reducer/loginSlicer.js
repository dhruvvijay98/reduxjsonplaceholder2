import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isLoggedIn: false,
    email: "",
    password: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state,action) => {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.isLoggedIn= false;
            state.email = null;
            state.password = null;
        }
        
    }
})

export const {login,logout} = loginSlice.actions;
export default loginSlice.reducer;