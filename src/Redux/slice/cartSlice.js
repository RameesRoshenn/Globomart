

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push({...action.payload , quantity: 1});
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
     
    increment: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = parseInt(quantity);
      }
    },
  },
});

export const { addToCart, removeFromCart,updateQuantity,increment ,decrement } = cartSlice.actions;

export default cartSlice.reducer;

