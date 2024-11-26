import { createSlice, } from "@reduxjs/toolkit";
import { fetchPhotos } from "./apiCallingPost";

const initialState ={
    photos: [],
    error: false,
    loading: false,
};
const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPhotos.pending, (state) => {
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.photos = action.payload; 
          })
          .addCase(fetchPhotos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; 
          });
      },
    });
    
    
    export const { increment, decrement, incrementByAmount } = photosSlice.actions;
    export default photosSlice.reducer;
    
  