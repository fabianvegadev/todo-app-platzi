import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
	const context = useContext(TodoContext);
	return (
		<h1 className="TodoCounter">
			Has completado <span>{context.completedTodos}</span> de{" "}
			<span>{context.totalTodos}</span> TODOs
		</h1>
	);
}

export { TodoCounter };
