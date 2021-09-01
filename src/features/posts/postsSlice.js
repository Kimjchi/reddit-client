import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}
    },
    reducers: {

    }
});

export const selectPosts = state => state.posts.posts;
export default postsSlice.reducer;