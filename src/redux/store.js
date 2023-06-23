import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/BookListSlice';
import categoriesReducer from './categories/categoriesSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    category: categoriesReducer,
    users: usersReducer,
  },
});

export default store;
