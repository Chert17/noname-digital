import { Status } from 'constants/status';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  getProductByIdThunk,
  getProductsThunk,
} from 'redux/products-slice/products-thunk';

const initialState = {
  products: [],
  status: Status.IDLE,
  productId: null,
  productItem: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductId(state, { payload }) {
      state.productId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductsThunk.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getProductsThunk.rejected, state => {
        state.status = Status.REJECTED;
      })
      .addCase(getProductByIdThunk.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
        state.productItem = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getProductByIdThunk.rejected, state => {
        state.status = Status.REJECTED;
      });
  },
});

export const { setProductId } = productSlice.actions;

export default productSlice.reducer;

// Selectors

export const productSelector = state => state.products.products;
export const productIdSelector = state => state.products.productId;
export const productItemSelector = state => state.products.productItem;
export const statusSelector = state => state.products.status;

// Persistor

const persistConfig = {
  key: 'productId',
  storage,
  whitelist: ['productId'],
};

export const productSlicePersistedReducer = persistReducer(
  persistConfig,
  productSlice.reducer
);
