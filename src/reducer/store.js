import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import apiReducer from "./apiSlicer";
import signupReducer from "./signupSlicer";
import loginReducer from "./loginSlicer";

export const store = configureStore({
    reducer : {
        jsonPlaceholderReducer : apiReducer,
        loginReducer : loginReducer,
        signupReducer : signupReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
})