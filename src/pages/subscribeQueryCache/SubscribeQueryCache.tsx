import { Note, noteOptions } from "@/services/api/remixNotes";
import { QueryObserver, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useCreateTodo, useGetTodos } from "../mutationNetworkMode/useTodoQueries";

const SubscribeQueryCache = () => {
	return (
		<div className="flex gap-2 p-10">
			<ComponentA />
			<ComponentB />
		</div>
	);
};

export default SubscribeQueryCache;

const ComponentA = () => {
	const { isPending, data } = useGetTodos();
	const { mutate } = useCreateTodo();
	const queryClient = useQueryClient();
	const ref = useRef<HTMLInputElement>(null);

	if (isPending) return <div>Loading...</div>;

	return (
		<div>
			<div className="flex gap-2">
				<input type="text" ref={ref} className="border border-black py-2 px-4 rounded" />
				<button
					type="button"
					className="border border-black py-2 px-4 rounded"
					onClick={() => {
						if (!ref.current) return;
						mutate(ref.current.value, {
							onSuccess: () => {
								queryClient.invalidateQueries({ queryKey: noteOptions.queryKey });
							},
						});
					}}
				>
					submit
				</button>
			</div>
			<ul>
				{data?.data.map((item) => (
					<li key={item._id}>{item.username}</li>
				))}
			</ul>
		</div>
	);
};

const ComponentB = () => {
	const queryClient = useQueryClient();
	const [todos, setTodos] = useState<Note[]>([]);

	useEffect(() => {
		const observer = new QueryObserver(queryClient, { queryKey: noteOptions.queryKey });

		const unsubscribe = observer.subscribe((result) => {
			console.log("result", result);
			setTodos(result.data?.data as Note[]);
		});

		return () => unsubscribe();
	}, []);

	return todos.length > 0 ? (
		<div>
			<ul>
				{todos.map((item) => (
					<li key={item._id}>{item.username}</li>
				))}
			</ul>
		</div>
	) : null;
};
