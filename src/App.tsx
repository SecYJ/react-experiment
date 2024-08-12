import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MutationNetworkMode from "./pages/mutationNetworkMode/MutationNetworkMode";
import EnsureQueries from "./pages/ensureQueries/EnsureQueries";
import EnsureQueriesId from "./pages/ensureQueries/EnsureQueriesId";
import PrefetchQueryPage from "./pages/prefetchQuery/PrefetchQueryPage";
import GetQueryData from "./pages/getQueryData/GetQueryData";
import SubscribeQueryCache from "./pages/subscribeQueryCache/SubscribeQueryCache";
import Home from "./pages/handleWithBreadcrumb/Home";
import Products from "./pages/handleWithBreadcrumb/Products";
import HandleLayout from "./pages/handleWithBreadcrumb/HandleLayout";
import ProductItem, { loader } from "./pages/handleWithBreadcrumb/ProductItem";
import { Match } from "./pages/handleWithBreadcrumb/BreadCrumb";
import ButtonPage from "./pages/button/ButtonPage";

const router = createBrowserRouter([
	{
		path: "/buttonPage",
		element: <ButtonPage />,
	},
	{
		path: "/mutation-network-mode",
		element: <MutationNetworkMode />,
	},
	{
		path: "/ensure-queries",
		element: <EnsureQueries />,
		children: [
			{
				path: ":id",
				element: <EnsureQueriesId />,
			},
		],
	},
	{
		path: "/prefetch-query",
		element: <PrefetchQueryPage />,
	},
	{
		path: "/getQueryData",
		element: <GetQueryData />,
	},
	{
		path: "/subscribeQueryCache",
		element: <SubscribeQueryCache />,
	},
	{
		path: "/",
		element: <HandleLayout />,
		handle: {
			crumb: () => (
				<Link to="/" className="underline">
					Home
				</Link>
			),
		},
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
				handle: {
					crumb: (match: Match) =>
						Object.values(match.params).length === 0 ? (
							<span>Products</span>
						) : (
							<Link to="/products" className="underline">
								Products
							</Link>
						),
				},
				children: [
					{
						path: ":productId",
						element: <ProductItem />,
						loader,
						handle: {
							crumb: (match: Match<{ id: number }>) => <span>Product Item {match.data.id}</span>,
						},
					},
				],
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
