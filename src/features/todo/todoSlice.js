import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiService from "../../app/apiService"

const initialState = { todos: [], filter: "SHOW_ALL", status: "idle" }

export const addTodo = createAsyncThunk("todo/addTodo", async (text) => {
	const todo = { text: text, completed: false }
	const res = await apiService.post("/todos", todo)
	return res.data
})

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// addTodo: (state, action) => {
		// 	state.todos.push({
		// 		text: action.payload,
		// 		completed: false,
		// 		id: nextTodoID++,
		// 	})
		// },
		toggleTodo: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id !== action.payload) {
					return todo
				}
				return {
					...todo,
					completed: !todo.completed,
				}
			})
		},
		setFilterTodo: (state, action) => {
			state.filter = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addTodo.pending, (state) => {
				state.status = "loading"
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.status = "idle"
				state.todos.push(action.payload)
			})
			.addCase(addTodo.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message
			})
	},
})

export default todoSlice.reducer
export const { toggleTodo, setFilterTodo } = todoSlice.actions
