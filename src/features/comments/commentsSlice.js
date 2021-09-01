import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: ''
    },
    reducers: {

    }
});

export const selectComments = state => state.comments.comments;

export default commentsSlice.reducer;