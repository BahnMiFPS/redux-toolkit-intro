import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, addCounter } from "./multiCounterSlice"

function MultiCounter() {
	const counters = useSelector((state) => state.multiCounter)
	console.log(counters)
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(addCounter())}>Add Counter</button>
			{counters.map((counter, index) => (
				<div key={index}>
					<button onClick={() => dispatch(decrement(index))}>-</button>
					<span>{counter.count}</span>
					<button onClick={() => dispatch(increment(index))}>+</button>
					{/* <button onClick={() => dispatch(removeCounter(index))}>REMOVE</button> */}
				</div>
			))}
		</div>
	)
}

export default MultiCounter
