import axios from "axios";

interface User {
	id: number;
	title: string;
}

const todoClient = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

class TodoApi<T> {
	async getTodos() {
		const response = await todoClient.get<T[]>("/todos");
		return response.data;
	}

	async getTodo(id: number) {
		const response = await todoClient.get<T>(`/todos/${id}`, {
			params: { id },
		});
		return response.data;
	}
}

export const { getTodo, getTodos } = new TodoApi<User>();
