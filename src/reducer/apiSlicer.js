import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./apiCalling";

const initialState={
    posts : [],
    error : false,
    loading : false,
}

const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.loading = true;
            state.error = null;
           
        })
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            state.error = null;
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export const { posts } = postsSlice.actions;
export default postsSlice.reducer;