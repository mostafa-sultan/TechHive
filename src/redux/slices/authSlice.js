// src/redux/slices/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api'; 

export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  const response = await api.post('/signin', credentials);
  return response.data;
});
export const signupAsync = createAsyncThunk('auth/Signup', async (credentials) => {
  const response = await api.post('/signup', credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(loginAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })      
    .addCase(signupAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(signupAsync.fulfilled, (state, action) => {
      state.status = 'succeeded'; 
    })
    .addCase(signupAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export  const { setUser, setToken, logout  } = authSlice.actions;
export default authSlice.reducer;
