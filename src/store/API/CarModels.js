import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Funzioni asincrone (API calls) con createAsyncThunk
export const fetchModels = createAsyncThunk('models/fetch', async () => {
  const response = await fetch('http://127.0.0.1:8000/api/car-models');
  if (!response.ok) {
    throw new Error('Errore durante il caricamento dei Modelli');
  }
  return response.json();
});

export const addModel = createAsyncThunk('models/add', async (newModel) => {
  const response = await fetch('http://127.0.0.1:8000/api/car-models', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newModel),
  });
  if (!response.ok) {
    throw new Error("Errore durante l'aggiunta del Modello");
  }
  return response.json();
});

// Slice per gestire lo stato e le azioni
const modelsSlice = createSlice({
  name: 'models',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // Fetch Models
      .addCase(fetchModels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchModels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Model
      .addCase(addModel.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default modelsSlice.reducer;
