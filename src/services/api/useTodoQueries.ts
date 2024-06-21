import { useQuery } from "@tanstack/react-query";
import { getTodo, getTodos } from "./todo";

export const useTodos = () => {
	return useQuery({
		queryKey: ["todos"],
		queryFn: getTodos,
	});
};

export const useTodo = (id: number) => {
	return useQuery({
		queryKey: ["todos", id],
		queryFn: () => getTodo(id),
	});
};
