import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Funzioni asincrone (API calls) con createAsyncThunk
export const fetchSingleBrand = createAsyncThunk('singleBrand/fetch', async (id) => {
  const response = await fetch(`http://127.0.0.1:8000/api/brands/${id}`);
  if (!response.ok) {
    throw new Error('Errore durante il fetch dei brands');
  }
  return response.json();
});

// Slice per gestire lo stato e le azioni
const singleBrandSlice = createSlice({
  name: 'singleBrand',
  initialState: {
    item: null,
    status: 'idle',
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // Fetch Brands
      .addCase(fetchSingleBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleBrand.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchSingleBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default singleBrandSlice.reducer;
