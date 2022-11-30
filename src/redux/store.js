import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './posts/postSlice';

export default configureStore({
    reducer: {
        posts: PostReducer,
    }
})