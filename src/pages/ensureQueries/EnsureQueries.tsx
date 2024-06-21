import { Link, Outlet } from "react-router-dom";
import { useTodo } from "../../services/api/useTodoQueries";

const EnsureQueries = () => {
	// NOTE: before navigate to ensureQueriesId page, fetch the data first so we can know is the data in cache or not
	useTodo(2);

	return (
		<div className="container">
			<div className="flex justify-center gap-4 p-8">
				{Array.from({ length: 10 }, (_, index) => {
					return (
						<Link to={`${index + 1}`} key={index + 1} className="border p-2 rounded-lg">
							button {index + 1}
						</Link>
					);
				})}
			</div>
			<Outlet />
		</div>
	);
};

export default EnsureQueries;
