import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
	const context = useContext(TodoContext);
	return (
		<button
			className="CreateTodoButton"
			onClick={() => context.setOpenModal((state) => !state)}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
