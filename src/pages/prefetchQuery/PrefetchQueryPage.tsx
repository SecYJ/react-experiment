import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getTodo } from "../../services/api/todo";
import PrefetchList from "./PrefetchList";

// NOTE: if the staleTime is set within prefetchQuery,
// React Query wont prefetch the data again until the staleTime has passed

const PrefetchQueryPage = () => {
	const [open, setOpen] = useState(false);
	const queryClient = useQueryClient();

	const prefetch = (id: number) => {
		queryClient.prefetchQuery({
			queryKey: ["todo", id],
			queryFn: () => getTodo(id),
			// staleTime: 60 * 1000,
			staleTime: Infinity,
		});
	};

	return (
		<div>
			<div className="flex justify-center w-full p-10 gap-2">
				<button
					type="button"
					className="rounded-lg py-2 px-4 border border-gray-400"
					onClick={() => prefetch(1)}
				>
					click to prefetch
				</button>
				<button type="button" onClick={() => setOpen(!open)}>
					show list
				</button>
			</div>
			{open && <PrefetchList />}
		</div>
	);
};

export default PrefetchQueryPage;
