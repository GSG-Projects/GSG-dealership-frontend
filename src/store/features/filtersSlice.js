import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fuel: [],
  price: [
    "Qualsiasi", "40.000 €", "50.000 €", "60.000 €", "70.000 €", 
    "80.000 €", "90.000 €", "100.000 €", "150.000 €", "200.000 €", "250.000 € +"
  ],
  cilindrata: [
    "Qualsiasi", "1000", "2000", "3000", "4000",
    "5000", "6000", "7000", "8000+"
  ],
  power: [
    "Qualsiasi", 
    "150 kW", 
    "200 kW", 
    "250 kW", 
    "300 kW", 
    "350 kW", 
    "400 kW", 
    "500 kW", 
    "600 kW", 
    "700 kW"
  ],
  transmission: [],
  reset: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFuel: (state, action) => {
      state.fuel = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
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
    setReset: (state, action) => {
      state.reset = action.payload;
    },
    resetFilters: (state) => {
      state.fuel = [];
      state.transmission = [];
      state.reset = 'Qualsiasi';
    },
  },
});

export const { setFuel, setPrice, setCilindrata, setPower, setTransmission, setReset, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;