import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const selectedSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    updateSelection: (state, action) => {
      state.selection = action.payload;
    },
  },
});

export const { updateSelection } = selectedSlice.actions;
export default selectedSlice.reducer;
