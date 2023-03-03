import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  cast: [],
};

const castSlice = createSlice({
  name: 'cast',
  initialState,
  reducers: {
    addProductToCast(state, { payload }) {
      const item = state.cast.find(item => item.id === payload.id);
      if (item !== undefined) {
        item.quantity += payload.quantity;
      } else {
        state.cast.push(payload);
      }
    },

    decrementQuantityProduct(state, { payload }) {
      const item = state.cast.find(item => item.id === payload);
      if (item !== undefined && item.quantity > 1) item.quantity -= 1;
    },

    deleteProductFromCast(state, { payload }) {
      state.cast = state.cast.filter(product => product.id !== payload);
    },

    clearCast(state) {
      state.cast = [];
    },
  },
});

export const {
  addProductToCast,
  decrementQuantityProduct,
  deleteProductFromCast,
  clearCast,
} = castSlice.actions;

export default castSlice.reducer;

// Selector

export const castSelector = state => state.cast.cast;

// Persistor

const persistConfig = {
  key: 'cast',
  storage,
};

export const castSlicePersistedReducer = persistReducer(
  persistConfig,
  castSlice.reducer
);
