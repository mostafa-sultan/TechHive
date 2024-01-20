// store.js
import { configureStore } from '@reduxjs/toolkit';  
import authSlice from './slices/authSlice';
import dataSlice from './slices/dataSlice';

 
const store = configureStore({
  reducer: { 
     auth: authSlice,
     data: dataSlice,
  },
  
});

export default store;