import "./EmptyTodos.css";
import { ArrowRight } from "./ArrowRight";
const EmptyTodos = () => {
	return (
		<div className="EmptyTodos-message">
			<p>Agrega tu primer TODO </p>
			<ArrowRight size={32} />
		</div>
	);
};

export { EmptyTodos };
