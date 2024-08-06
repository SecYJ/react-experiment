import { Outlet } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

const HandleLayout = () => {
	return (
		<div className="p-10">
			<div className="mb-10">
				<BreadCrumb />
			</div>
			<Outlet />
		</div>
	);
};

export default HandleLayout;
