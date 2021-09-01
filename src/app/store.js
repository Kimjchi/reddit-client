import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import commentsReducer from '../features/comments/commentsSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    comments: commentsReducer,
    posts: postsReducer
  },
});
