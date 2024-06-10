import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
	baseURL: "https://remix-knowledge-sharing-backend.onrender.com",
});

export const useGetTodos = () => {
	return useQuery({
		queryKey: ["notes"],
		queryFn: async () => {
			const response = await client.get<{
				data: Array<{
					_id: string;
					username: string;
				}>;
			}>("/notes");

			return response.data;
		},
	});
};

export const useCreateTodo = () => {
	return useMutation({
		mutationKey: ["notes"],
		mutationFn: (username: string) => {
			return client.post("/notes", {
				username,
			});
		},
		networkMode: "online",
	});
};
