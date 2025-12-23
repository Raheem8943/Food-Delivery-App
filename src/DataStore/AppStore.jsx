import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
const loadFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load cart from storage", e);
    return undefined;
  }
};

const saveToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save cart to storage", e);
  }
};

const preloadedState = {
  cart: loadFromStorage(),
};

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

AppStore.subscribe(() => {
  saveToStorage(AppStore.getState().cart);
});

export default AppStore;
