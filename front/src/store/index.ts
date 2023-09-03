import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/users.api';
import toastReducer from './slice/toast.slice';

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
