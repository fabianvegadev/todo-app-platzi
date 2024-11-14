import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);

	const [searchValue, setSearchValue] = useState("");

	const [openModal, setOpenModal] = useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed: false,
		});
		saveTodos(newTodos);
	};

	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				addTodo,
				completedTodos,
				totalTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				completeTodo,
				deleteTodo,
				openModal,
				setOpenModal,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };