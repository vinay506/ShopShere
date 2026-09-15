import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../api/endPoints';

const loginThunk = createAsyncThunk(
  'auth/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    const response =    await loginAPI(credentials);
    if (response.status === 200) {
        const { token, ...user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return { user, token };
    } else {
        return rejectWithValue('Login failed'); 
    }

  }
);

interface User { 
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string;
  loading: 'idle' | 'loading' | 'succeeded' | 'failed'  ;
};
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: '',
  loading:'idle'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = 'failed';
        state.user = null;
        state.token = '';
        state.isAuthenticated = false;
      });
  }
});

export { loginThunk as login };
export default authSlice.reducer;