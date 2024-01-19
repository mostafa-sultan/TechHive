// store.js
import { configureStore } from '@reduxjs/toolkit'; 
import todoSlice from './slices/todoSlice';
import userSlice from './slices/userSlice';

 
const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
     userSlice: userSlice 
  },
  
});

export default store;