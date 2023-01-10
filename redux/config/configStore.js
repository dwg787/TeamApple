// import { configureStore } from '@reduxjs/toolkit';

// import posts from '../modules/posts';

// const store = configureStore({
//   reducer: {
//     posts: posts,
//   },

// << development 환경에서만 redux devtool이 활성화 되도록 처리 >>

//방법 1
// devTools: false,

//방법 2
// devTools: process.env.NODE_ENV === 'production',

// 방법 3
// 개발모드일 때만 리덕스 개발자도구를 사용하도록 설정
// devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
