// todoSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('https://api.npoint.io/40d1d06f2019296b4932')
    const data = await res.data
    return data
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [{taskname:"hi",user:"mohamed",}],
    isLoading: false,

  },
  // initialState: { todos: null },
  reducers: {
    restState: (state, action) => { 
      state.data=[]  
      console.log("set todo" + JSON.stringify(state.data));
    },

    addTodo: (state, action) => {
      state.data=[ ...state.data,action.payload ] 
      console.log(action.payload);
      console.log("add todo" + JSON.stringify(state.data)); 
    },

    removeTodo: (state, action) => { 
      console.log("state before" + JSON.stringify(state.data)); 
      state.data=state.data.filter(  record => record.id !== action.payload.id ) 
      console.log("remove todo state aftter" + JSON.stringify(state.data)); 
    },

    updateTodo: (state, action) => {  
          state.data = state.data.map(item =>
            item.id === action.payload.id ? { ...item, data: 'Updated Item' } : item
          ) 
      console.log("update todo" + JSON.stringify(state.data)); 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      console.log('isLoading');
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      console.info("api data get succsesfull ");
      state.data =[...state.data,...action.payload.data] 
      console.log("state" + JSON.stringify(state.data));

    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      console.log("error in get data" + action.error.message);
      state.error = action.error.message
    })
  },
});

export const { restState, addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;