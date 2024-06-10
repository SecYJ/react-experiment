import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MutationNetworkMode from "./pages/mutationNetworkMode/MutationNetworkMode";

const router = createBrowserRouter([
	{
		path: "/mutation-network-mode",
		element: <MutationNetworkMode />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
