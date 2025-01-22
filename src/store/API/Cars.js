import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Funzioni asincrone (API calls) con createAsyncThunk
export const fetchCars = createAsyncThunk('cars/fetch', async () => {
  const response = await fetch('http://127.0.0.1:8000/api/cars');
  if (!response.ok) {
    throw new Error('Errore durante il fetch delle macchine');
  }
  return response.json();
});

export const addCar = createAsyncThunk('cars/add', async (newCar) => {
  const response = await fetch('http://127.0.0.1:8000/api/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar),
  });
  if (!response.ok) {
    throw new Error('Errore durante l\'aggiunta della macchina');
  }
  return response.json();
});

// Slice per gestire lo stato e le azioni
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // Fetch Cars
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Car
      .addCase(addCar.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default carsSlice.reducer;
