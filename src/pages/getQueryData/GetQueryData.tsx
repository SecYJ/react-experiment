import { getNotes } from "@/services/api/remixNotes";
import { queryOptions, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useCreateTodo, useGetTodos } from "../mutationNetworkMode/useTodoQueries";

const noteOptions = queryOptions({
	queryKey: ["notes"],
	queryFn: getNotes,
});

const GetQueryData = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button type="button" onClick={() => setOpen(!open)}>
				toggle button
			</button>

			<ComponentA />
			{open && <ComponentB />}
		</div>
	);
};

const ComponentA = () => {
	const { refetch } = useGetTodos();
	const { mutate: createTodo } = useCreateTodo();
	const ref = useRef<HTMLInputElement>(null);

	return (
		<div className="p-10">
			<input type="text" ref={ref} placeholder="Enter todo" className="border border-black p-2 mb-2" />
			<div className="flex gap-2 *:border *:border-black *:py-2 *:px-4">
				<button
					type="button"
					onClick={() => {
						if (!ref.current) return;

						createTodo(ref.current.value);
					}}
				>
					Create todo
				</button>
				<button type="button" onClick={() => refetch()}>
					Refetch todo
				</button>
			</div>
		</div>
	);
};

const ComponentB = () => {
	const queryClient = useQueryClient();

	// const data = queryClient.getQueryData([options.queryKey]);
	const data = queryClient.getQueryData(noteOptions.queryKey);

	console.log("data", data);

	return (
		<div className="pl-10">
			<ul>
				{data?.data.map((user) => (
					<li key={user._id}>{user.username}</li>
				))}
			</ul>
		</div>
	);
};

export default GetQueryData;
