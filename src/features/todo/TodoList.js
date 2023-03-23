import React from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { toggleTodo } from "./todoSlice"

function getVisibleTodos(todos, filter) {
	switch (filter) {
		case "SHOW_ALL":
			return todos
		case "SHOW_COMPLETED":
			return todos.filter((todo) => todo.completed)
		case "SHOW_ACTIVE":
			return todos.filter((todo) => !todo.completed)

		default:
			return todos
	}
}

function TodoList() {
	const { todos, filter } = useSelector((state) => state.todos)
	console.log(todos, filter)
	const filteredTodos = getVisibleTodos(todos, filter)
	console.log(todos.completed)
	const dispatch = useDispatch()
	return (
		<ul>
			{filteredTodos.map((todo) => (
				<li
					key={todo.id}
					onClick={() => dispatch(toggleTodo(todo.id))}
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				>
					{todo.text}
				</li>
			))}
		</ul>
	)
}

export default TodoList
