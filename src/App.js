import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import MultiCounter from "./features/multiCounter/MultiCounter"
import Todo from "./features/todo/Todo"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <Counter /> */}
				{/* <MultiCounter /> */}
				<Todo />
			</header>
		</div>
	)
}

export default App
