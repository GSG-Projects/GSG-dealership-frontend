import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './Brands';
import carsReducer from './Cars';
import modelsReducer from './CarModels';

const store = configureStore({
  reducer: {
    brands: brandsReducer,
    cars: carsReducer,
    models: modelsReducer,
  },
});

export default store;