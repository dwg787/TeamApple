import { configureStore } from '@reduxjs/toolkit';
import selection from '../../redux/modules/selection';

const store = configureStore({
  reducer: {
    selection,
  },
});

export default store;
