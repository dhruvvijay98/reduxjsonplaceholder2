import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : [{}],
    isLoggedIn: false
}

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signup: (state,action) =>  {
            console.log(action,"...............action signup.....",state)
            state.user = [...state.user,action.payload];
            state.isLoggedIn = true;
        }
    }
})

export const {signup}= signupSlice.actions;
export default signupSlice.reducer;