import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"

function AddTodo() {
	const dispatch = useDispatch()
	const [text, setText] = useState("") // Create a state for the input value

	const handleSubmitTodo = (e) => {
		e.preventDefault()
		if (text.trim() === "") return // Check if the input value is not empty
		dispatch(addTodo(text))
		setText("") // Clear the input field
	}

	return (
		<form onSubmit={handleSubmitTodo}>
			<input
				placeholder="Add a Todo List"
				type="text"
				name="todo-name"
				value={text} // Assign the input value to the state
				onChange={(e) => setText(e.target.value)} // Update the state on input change
			/>
			<button type="submit">Add Todo</button>
		</form>
	)
}

export default AddTodo
