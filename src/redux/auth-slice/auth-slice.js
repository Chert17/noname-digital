import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { displayName: '', email: '', photoURL: '' },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
    },
    logoutUser(state) {
      state.token = null;
      state.user = { displayName: '', email: '', photoURL: '' };
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

//selector

export const tokenSelector = state => state.auth.token;
export const userSelector = state => state.auth.user;

// Persist
const persistConfig = {
  key: 'authUser',
  storage,
  // whitelist: ['token'],
};

export const authSlicePersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
