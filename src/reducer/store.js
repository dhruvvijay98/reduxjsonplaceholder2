import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlicer";
import {thunk} from "redux-thunk";

export const store = configureStore(
    {
        reducer:{ jsonPlaceHolderReducer:apiReducer,login:{}},
        middleware: (getDefaultMiddleware) =>
        
            getDefaultMiddleware().concat(thunk),
            devTools: process.env.NODE_ENV !== 'production',
        
    }
)
