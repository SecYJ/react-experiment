import axios from "axios";
import { json, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface Item {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const data = await axios.get<Item>(`https://jsonplaceholder.typicode.com/todos/${params.productId}`);
	return json(data.data);
};

const ProductItem = () => {
	const data = useLoaderData() as Item;

	return <div>You are viewing {data.id}</div>;
};

export default ProductItem;
