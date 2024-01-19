// postSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: { user: {} },
  reducers: {
    setUser: (state, action) => {
      // state.posts = action.payload;
    }, 
    deleteUserData: (state, action) => {
      // return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { setUser, deleteUserData } = userSlice.actions;

export default userSlice.reducer;