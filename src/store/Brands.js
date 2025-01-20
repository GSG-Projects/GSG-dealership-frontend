import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Funzioni asincrone (API calls) con createAsyncThunk
export const fetchBrands = createAsyncThunk('brands/fetch', async () => {
  const response = await fetch('http://127.0.0.1:8000/api/brands');
  if (!response.ok) {
    throw new Error('Errore durante il fetch dei brands');
  }
  return response.json();
});

export const addBrand = createAsyncThunk('brands/add', async (newBrand) => {
  const response = await fetch('http://127.0.0.1:8000/api/brands', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBrand),
  });
  if (!response.ok) {
    throw new Error('Errore durante l\'aggiunta del brand');
  }
  return response.json();
});

// Slice per gestire lo stato e le azioni
const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // Fetch Brands
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Brand
      .addCase(addBrand.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default brandsSlice.reducer;
