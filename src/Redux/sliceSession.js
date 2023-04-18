import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000';

export const LoginUser = createAsyncThunk('Login', async (user) => {
  // const login = async (userInfo, setCurrUser) => {
  // const url = 'http://localhost:3000/users/sign_in';
  try {
    const response = await fetch(`${BASE_URL}/users/sign_in`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) throw data.error;
    localStorage.setItem('token', response.headers.get('Authorization'));
    return data;
  } catch (error) {
    return error;
  }
});

export const sliceReduser = createSlice({
  name: 'auth',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(LoginUser.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }));
    builder.addCase(LoginUser.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export const sessionReduser = sliceReduser.reducer;
