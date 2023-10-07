import { Link } from "react-router-dom";
import { Darkmode } from "../Darkmode";

export const Navbar = () => {
	return (
		<nav className="flex justify-between">
			<Link className="font-bold hover:text-blue-800" to="/">
				STIVENHUB
			</Link>

			<ul className="flex gap-5">
				<li>
					<Link className="text-blue-500 hover:text-blue-800" to="/">
						Search
					</Link>
				</li>
				<li>
					<Link
						className="text-blue-500 hover:text-blue-800"
						to="/saves"
					>
						Saves
					</Link>
				</li>
				<Darkmode />
			</ul>
		</nav>
	);
};
