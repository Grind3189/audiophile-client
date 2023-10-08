import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
