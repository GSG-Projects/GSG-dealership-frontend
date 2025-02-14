import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './API/Brands';
import carsReducer from './API/Cars';
import modelsReducer from './API/CarModels';
import singleBrandReducer from './API/SingleBrand';
import filtersReducer from './features/filtersSlice';

const store = configureStore({
  reducer: {
    brands: brandsReducer,
    singleBrand: singleBrandReducer,
    cars: carsReducer,
    models: modelsReducer,
    filters: filtersReducer,
  },
});

export default store;