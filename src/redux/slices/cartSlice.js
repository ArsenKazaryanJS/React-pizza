import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      const repeatItem = state.items.find((el) => el.id === action.payload.id);
      if (repeatItem) {
        repeatItem.count++;
        if (!repeatItem.size.includes(action.payload.size[0])) {
          repeatItem.size.push(action.payload.size[0]);
        }
      } else {
        state.items.push({ ...action.payload, count: 1, size: action.payload.size });
      }
      state.totalPrice = state.items.reduce(
        (total, pizza) => total + pizza.price * pizza.count,
        0
      );
    },

    removeItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    removeItem(state, action) {
        const remove = state.items.find((el)=> el.id === action.payload.id)
        if(remove){
            state.items = state.items.filter((el) => el.id !== action.payload.id);
            remove.price = remove.count * remove.price
            state.totalPrice -= remove.price
        }
    },
    plusMinus(state,action){
        const item = state.items.find((el) => el.id === action.payload.id);
    
    if (item) {
        if (action.payload.argument === 'plus') {
            item.count++;
        } else if (action.payload.argument === 'minus' && item.count > 0) {
            item.count--;
        }
        if (item.count === 0) {
            state.items = state.items.filter((el) => el.id !== action.payload.id);
        }
        state.totalPrice = state.items.reduce(
            (total, pizza) => total + pizza.price * pizza.count, 0);
    }
    }
  },
});

export const { addPizza, removeItems, removeItem, plusMinus } = cartSlice.actions;
export default cartSlice.reducer;
