import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlicePersistedReducer } from './auth-slice/auth-slice';
import { castSlicePersistedReducer } from './cast-slice/cast-slice';
import { productSlicePersistedReducer } from './products-slice/products-slice';

export const store = configureStore({
  reducer: {
    auth: authSlicePersistedReducer,
    products: productSlicePersistedReducer,
    cast: castSlicePersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
