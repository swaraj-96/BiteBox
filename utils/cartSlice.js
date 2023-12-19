import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items.length = 0;
      localStorage.removeItem("cart");
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const increase = state.items.find((cartItem) => cartItem?.item?.card?.info?.id == id);
      if (increase) {
        increase.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const decrease = state.items.find((cartItem) => cartItem?.item?.card?.info?.id == id
      );
      if (decrease && decrease.quantity > 1) {
        decrease.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.card?.info?.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const cartTotalPrice = ({cart}) => {
  return cart?.items.reduce((total, cartItem) => {
    return total + cartItem.item.itemPrice * cartItem.quantity;
  }, 0);
}

export const { addItem, increaseQuantity, decreaseQuantity, clearCart, removeFromCart} =
  cartSlice.actions;
export default cartSlice.reducer;
