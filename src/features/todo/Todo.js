import React from "react"
import AddTodo from "./AddTodo"
import TodoButtonsGroup from "./TodoButtonsGroup"
import TodoList from "./TodoList"

function Todo() {
	return (
		<div>
			<AddTodo />
			<TodoList />
			<TodoButtonsGroup />
		</div>
	)
}

export default Todo
