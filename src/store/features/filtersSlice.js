import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fuel: [],
  range: 'Qualsiasi',
  transmission: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFuel: (state, action) => {
      state.fuel = action.payload;
    },
    setRange: (state, action) => {
      state.range = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    resetFilters: () => ({ ...initialState }),
  },
});

export const { setFuel, setRange, setTransmission, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;