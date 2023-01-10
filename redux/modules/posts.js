// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   posts: [],
//   isLoading: false,
//   error: null,
// };

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     addPost: (state, action) => {
//       state.posts = [...state.posts, action.payload];
//     },

//     deletePost: (state, action) => {
//       state.posts = state.posts.filter((posts) => posts.id !== action.payload);
//     },
//     updatePost: (state, action) => {
//       let postlist = state.posts.slice();
//       postlist.find((e) => e.id === action.payload.id) =
//         action.payload;
//       state.posts = postlist;
//     },
//   },
// });

// export const { addPost, deletePost, updatePost } =
//   postsSlice.actions;
// export default postsSlice.reducer;
