import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async(_,{rejectWithValue}) => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
);