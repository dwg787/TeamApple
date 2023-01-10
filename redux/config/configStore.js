import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import posts from '../modules/posts';
import comments from '../modules/comments';
import userSlice from '../modules/userSlice';
import allUserListSlice from '../modules/allUserListSlice';

/**
 * 모듈(Slice)이 여러개인 경우
 * 추가할때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
 *
 * 아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos 기능이 모두 있고,
 * 이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것 입니다.
 */
const store = configureStore({
  reducer: {
    posts: posts,
    comments: comments,
    user: userSlice,
    allUserList: allUserListSlice,
  },
  // middleware: [thunk],
  // 다음이 middleware 추가 코드이다.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }),

  // << development 환경에서만 redux devtool이 활성화 되도록 처리 >>

  //방법 1
  devTools: false,

  //방법 2
  // devTools: process.env.NODE_ENV === 'production',

  // 방법 3
  // 개발모드일 때만 리덕스 개발자도구를 사용하도록 설정
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
