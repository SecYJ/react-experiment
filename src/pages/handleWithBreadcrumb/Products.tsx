import { Link, Outlet } from "react-router-dom";

const Products = () => {
	return (
		<div className="flex gap-10">
			<ul className="list-disc pl-10">
				{Array.from({ length: 3 }, (_, i) => (
					<li key={i}>
						<Link to={`/products/${i + 1}`} className="hover:underline">
							Item {i + 1}
						</Link>
					</li>
				))}
			</ul>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Products;
