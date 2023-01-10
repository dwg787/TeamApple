import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    // {
    //   id: 1,
    //   title: '제목1',
    //   content: '내용1',
    // },
  ],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((posts) => posts.id !== action.payload);
    },

    togglePost: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).isDone = !postlist.find(
        (e) => e.id === action.payload
      ).isDone;
      state.posts = postlist;
    },
    toggleDisplay: (state, action) => {
      let postlist = state.posts.slice();
      postlist.find((e) => e.id === action.payload).displaytoggle =
        !postlist.find((e) => e.id === action.payload).displaytoggle;
      state.posts = postlist;
    },
    updatePost: (state, action) => {
      let postlist = state.posts.slice();
      // postlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.posts = postlist;
    },
  },
});

export const { addPost, deletePost, togglePost, updatePost, toggleDisplay } =
  postsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsSlice.reducer;
