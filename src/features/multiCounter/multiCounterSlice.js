import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const multiCounterSlice = createSlice({
	name: "multiCounter",
	initialState,
	reducers: {
		addCounter: (state) => {
			state.push({ count: 0 })
		},
		increment: (state, action) => {
			const index = action.payload
			state[index].count += 1
		},
		decrement: (state, action) => {
			const index = action.payload
			state[index].count -= 1
		},
	},
})

export const { addCounter, increment, decrement } = multiCounterSlice.actions
export default multiCounterSlice.reducer
