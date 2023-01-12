import { configureStore } from '@reduxjs/toolkit';
import selection from '../../redux/modules/selection';
import isFavorite from '../../redux/modules/isFavorite';

const store = configureStore({
  reducer: {
    selection,
    isFavorite,
  },
});

export default store;
