import { configureStore } from '@reduxjs/toolkit';
import thunk        from 'redux-thunk';
import { todoReducer }  from './todos';
import { authReducer } from './auth';

export default configureStore({

  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },

  middleware: [thunk]
});
