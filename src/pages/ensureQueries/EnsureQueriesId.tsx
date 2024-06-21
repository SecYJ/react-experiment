import { useQueryClient, useIsFetching } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodo } from "../../services/api/todo";

interface User {
	id: number;
	title: string;
}

const EnsureQueriesId = () => {
	const queryClient = useQueryClient();
	const params = useParams();
	const [user, setUser] = useState<User | null>(null);
	// NOTE: useIsFetching returns a number that indicates how many queries are currently fetching
	const isFetching = useIsFetching({
		queryKey: ["todos", Number(params?.id)],
		exact: true,
	});

	useEffect(() => {
		const ensureQueryData = async (index: number) => {
			const data = await queryClient.ensureQueryData({
				queryKey: ["todos", index],
				queryFn: () => getTodo(index),
			});

			setUser(data);
		};

		if (!params || !params.id) return;

		ensureQueryData(parseInt(params.id));
	}, [params?.id]);

	if (isFetching) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>User id: {user?.id}</h2>
			<h2>User title: {user?.title}</h2>
		</div>
	);
};

export default EnsureQueriesId;
