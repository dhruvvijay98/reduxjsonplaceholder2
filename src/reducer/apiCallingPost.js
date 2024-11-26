import { createAsyncThunk, } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
    "photos/fetchPhotos",
    async(_,{ rejectedWithValue}) => {
        try{
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/photos?_limit=10"
            );
           
            const data= await response.json();
            return data;
        } catch(error){
            return rejectedWithValue(error.message);
        }
    }
);
