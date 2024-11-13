import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
	const context = useContext(TodoContext);
	return (
		<input
			placeholder="Cortar cebolla"
			className="TodoSearch"
			value={context.searchValue}
			onChange={(event) => {
				context.setSearchValue(event.target.value);
			}}
		/>
	);
}

export { TodoSearch };
