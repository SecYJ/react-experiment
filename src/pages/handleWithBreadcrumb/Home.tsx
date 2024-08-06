import { Link, Outlet } from "react-router-dom";

const Home = () => {
	return (
		<div className="p-10">
			<div className="flex gap-4">
				<p>Go to</p>
				<Link to="products" className="underline">
					Products
				</Link>
			</div>

			<Outlet />
		</div>
	);
};

export default Home;
