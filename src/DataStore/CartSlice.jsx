import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const exists = state.item.find(
        (i) => i.card.info.id === newItem.card.info.id
      );
      if (!exists) {
        state.item.push(newItem);
      }
    },
    removeItem(state, action) {
      state.item = state.item.filter((i) => i.card.info.id !== action.payload);
    },
    clearCart(state) {
      state.item.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
