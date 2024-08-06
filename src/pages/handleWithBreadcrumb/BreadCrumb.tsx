import { Fragment } from "react";
import { Params, useMatches } from "react-router-dom";

export interface Match<T = unknown> {
	id: string;
	pathname: string;
	params: Params<string>;
	data: T;
	handle: {
		crumb: (matchData: Match) => JSX.Element;
	};
}

const BreadCrumb = () => {
	const matches = useMatches() as Match[];

	const crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((s) => s.handle.crumb(s));

	return (
		<div className="flex gap-4">
			{crumbs.map((crumb, index) => (
				<Fragment key={index}>
					{crumb}
					{index !== crumbs.length - 1 && <div>{">"}</div>}
				</Fragment>
			))}
		</div>
	);
};

export default BreadCrumb;
