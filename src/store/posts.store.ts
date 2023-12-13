import { RootState } from "@/store";
import { Post, PostStatus } from "@prisma/client";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  all: Post[] | null;
  current: Post | null;
}

const initialState: PostsState = {
  all: null,
  current: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.all = action.payload;
    },
    setCurrentPost: (state, action: PayloadAction<Post>) => {
      state.current = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      if (state.all) {
        state.all = [...state.all, action.payload];
      } else {
        state.all = [action.payload];
      }
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      if (state.all) {
        state.all = state.all.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }

          return post;
        });
      }

      if (state.current && state.current.id === action.payload.id) {
        state.current = action.payload;
      }
    },
  },
});

const posts = (state: RootState) => state.posts.all;

export const getPostByselectPostByStatusStatus = createSelector(
  [posts, (posts, status: PostStatus) => status],
  (posts, status) => {
    return posts?.filter((post) => post.status === status);
  }
);

export const { setPosts, setCurrentPost, addPost, updatePost } =
  postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
