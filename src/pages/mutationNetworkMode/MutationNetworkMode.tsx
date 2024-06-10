import { useRef } from "react";
import { useCreateTodo, useGetTodos } from "./useTodoQueries";
import { useQueryClient } from "@tanstack/react-query";

// NOTE: TESTING network mode

const MutationNetworkMode = () => {
	const queryClient = useQueryClient();
	const { data } = useGetTodos();
	const { mutate } = useCreateTodo();
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="p-4">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!inputRef.current?.value) return;
					mutate(inputRef.current.value, {
						onSuccess: () => {
							queryClient.invalidateQueries({
								queryKey: ["notes"],
							});
						},
					});
				}}
			>
				<input type="text" className="border border-black" ref={inputRef} />
				<button type="submit">create todo</button>
			</form>
			<ul>
				{data?.data.map((todo) => (
					<li key={todo._id}>{todo.username}</li>
				))}
			</ul>

			<input type="text" />
		</div>
	);
};

export default MutationNetworkMode;
