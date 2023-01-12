import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const favoriteSlice = createSlice({
  name: 'isFavorite',
  initialState,
  reducers: {
    favoriteState: (state, action) => {
      let newFavoriteState = state.isFavorite.slice();
      newFavoriteState = newFavoriteState.find(
        (e) => e.id === action.payload
      ).isLike = !newFavoriteState.find((e) => e.id === action.payload).isLike;
      state.isFavorite = newFavoriteState;
    },
  },
});

export const { favoriteState } = favoriteSlice.actions;
export default favoriteSlice.reducer;
