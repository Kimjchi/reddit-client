import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const json = await response.json();
    return json.data.children;
  });

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        hasError: false
    },
    reducers: {

    },
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.loading = true;
        state.hasError = false;
      },
      [fetchPosts.fulfilled]: (state, action) => {
        state.loading = false;
        state.hasError = false;
        state.posts = (action.payload.map(d => d.data));
      },
      [fetchPosts.rejected]: (state, action) => {
        state.loading = false;
        state.hasError = true;
      }
    }
});

export const selectPosts = state => state.posts.posts;
export default postsSlice.reducer;