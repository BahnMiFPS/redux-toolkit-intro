import React from "react"
import { useDispatch } from "react-redux"
import { setFilterTodo } from "./todoSlice"
// import { setFilterTodo } from "./actions"

function TodoButtonsGroup() {
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(setFilterTodo("SHOW_COMPLETED"))}>
				Show Completed
			</button>
			<button onClick={() => dispatch(setFilterTodo("SHOW_ACTIVE"))}>
				Show Active
			</button>
			<button onClick={() => dispatch(setFilterTodo("SHOW_ALL"))}>
				Show All
			</button>
		</div>
	)
}

export default TodoButtonsGroup
