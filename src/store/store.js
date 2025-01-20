import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './Brands';
// import carsReducer from './slices/carsSlice';

const store = configureStore({
  reducer: {
    brands: brandsReducer,
    // Cars: carsReducer,
  },
});

export default store;