import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
	const context = useContext(TodoContext);
	const [newTodoValue, setNewTodoValue] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		context.addTodo(newTodoValue);
		context.setOpenModal(false);
	};

	const onCancel = () => {
		context.setOpenModal(false);
	};
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				onChange={onChange}
				value={newTodoValue}
				placeholder="Terminar curso de React en Platzi"
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					onClick={onCancel}
					className="TodoForm-button TodoForm-button--cancel"
				>
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button--add">
					Añadir
				</button>
			</div>
		</form>
	);
};

export { TodoForm };
