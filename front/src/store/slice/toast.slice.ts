import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersApi } from 'store/api/users.api';

interface ToastState {
  message: string | null;
  type: 'error' | 'success' | null;
}

const initialState: ToastState = {
  message: null,
  type: null,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<{ message: string, type: 'error' | 'success' }>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearToast: (state) => {
      state.message = null;
    },
  },
});

export const { showToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
