import * as toolkit from '@reduxjs/toolkit';
import authReducer from './authSlice';

export default toolkit.configureStore({
  reducer: {
    auth: authReducer
  },
});
