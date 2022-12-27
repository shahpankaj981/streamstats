import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem('token')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        console.log('payload', action.payload);
        localStorage.setItem("token", action.payload);
        state.token = action.payload;
      },
      logout: (state) => {
        localStorage.removeItem("token");
        state.token = null;
      },
    },
  })
  

  export const { login, logout } = authSlice.actions
  
  export default authSlice.reducer