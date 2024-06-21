import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MutationNetworkMode from "./pages/mutationNetworkMode/MutationNetworkMode";
import EnsureQueries from "./pages/ensureQueries/EnsureQueries";
import EnsureQueriesId from "./pages/ensureQueries/EnsureQueriesId";

const router = createBrowserRouter([
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
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
