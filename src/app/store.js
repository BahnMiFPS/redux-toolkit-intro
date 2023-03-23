import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import multiCounterReducer from "../features/multiCounter/multiCounterSlice"
import todoReducer from "../features/todo/todoSlice"
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		multiCounter: multiCounterReducer,
		todos: todoReducer,
	},
})
