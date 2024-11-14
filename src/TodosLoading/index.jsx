import { LoadingIcon } from "./LoadingIcon";
import "./TodosLoading.css";

const TodosLoading = () => {
	return (
		<figure className="Loading-container">
			<LoadingIcon size={60} />
		</figure>
	);
};

export { TodosLoading };
