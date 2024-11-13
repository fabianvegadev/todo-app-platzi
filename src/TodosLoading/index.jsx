import loading from "./loading.svg";
import "./TodosLoading.css";

const TodosLoading = () => {
	return (
		<figure className="Loading-container">
			<img src={loading} className="Loading-icon" />
		</figure>
	);
};

export { TodosLoading };
