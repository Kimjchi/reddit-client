import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments', async ({postId, subreddit}) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/${postId}.json`);
    console.log(`https://www.reddit.com/r/${subreddit}/${postId}.json`);
    const json = await response.json();
    return json;
  });

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],        
        loading: false,
        hasError: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.loading = true;
            state.hasError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.hasError = false;
          state.comments = (action.payload.map(d => d.data));
        },
        [fetchComments.rejected]: (state, action) => {
            state.loading = false;
            state.hasError = true;
        }
      }
});

export const selectComments = state => state.comments.comments;

export default commentsSlice.reducer;