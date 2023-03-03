import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProductByIdService,
  getProductsService,
} from 'service/products-service';

export const getProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProductsService();

      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  'products/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const data = await getProductByIdService(productId);

      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
