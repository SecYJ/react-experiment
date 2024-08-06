import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodo } from "../../services/api/todo";

const PrefetchList = () => {
	const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ["todo", 1],
		queryFn: () => getTodo(1),
	});

	console.log("data", data);

	return <div>PrefetchList</div>;
};

export default PrefetchList;
