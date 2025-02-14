import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fuel: [],
  cilindrata: [],
  power: [],
  transmission: [],
  price: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFuel: (state, action) => {
      state.fuel = action.payload;
    },
    setCilindrata: (state, action) => {
      state.cilindrata = action.payload;
    },
    setPower: (state, action) => {
      state.power = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setFuel, setCilindrata, setPower, setTransmission, setPrice, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;