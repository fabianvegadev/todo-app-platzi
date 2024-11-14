import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
	const context = useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{context.loading && <TodosLoading />}
				{context.error && <TodosError />}
				{!context.loading && context.searchedTodos.length === 0 && (
					<EmptyTodos />
				)}

				{context.searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => context.completeTodo(todo.text)}
						onDelete={() => context.deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />

			{context.openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</>
	);
}

export { AppUI };
