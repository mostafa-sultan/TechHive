// src/redux/slices/dataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api';

export const fetchItems = createAsyncThunk('data/fetchItems', async () => {
  console.log("response.data");

  const response = await api.get('/todos');
  return response.data;
});

export const addItemAsync = createAsyncThunk('data/addItem', async (newItem) => {
  console.log("data/addItem");

  const response = await api.post('/todos', newItem);
  return response.data;
});

export const removeItemAsync = createAsyncThunk('data/removeItem', async (itemId) => {
  await api.delete(`/todos/${itemId}`);
  return itemId;
});
export const updateItemAsync = createAsyncThunk('data/updateItem', async (newItem) => {
  const { id, newReco } = newItem;
  const response = await api.put(`/todos/${id}`, newReco);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        console.log("hhh");
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
        // state.items = state.items.filter((item) => item.id !== action.payload);
      })
  },
});

export default dataSlice.reducer;
