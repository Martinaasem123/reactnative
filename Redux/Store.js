import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from './Slices/Todo.slice';

export const store = configureStore({
    reducer: {
        todos: TodoSlice
    },
});