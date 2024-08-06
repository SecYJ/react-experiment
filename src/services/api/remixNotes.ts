import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://remix-knowledge-sharing-backend.onrender.com",
});

export interface Note {
	_id: string;
	username: string;
}

export const getNotes = async (): Promise<{ data: Note[] }> => {
	const response = await apiClient.get("/notes");
	return response.data;
};

export const noteOptions = queryOptions({
	queryKey: ["notes"],
	queryFn: getNotes,
});
