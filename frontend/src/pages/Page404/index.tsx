import { Link } from "react-router-dom";

export const Page404 = () => {
	return (
		<div className="grow flex flex-col gap-5 justify-center items-center bg-blue-600 p-5 rounded-lg">
			<h1 className="font-bold text-9xl text-white ">404</h1>
			<p className="text-3xl text-white">Page not found</p>
			<div className="mt-4">
				<Link
					to="/"
					className="font-bold px-5 py-2 border-2 bg-white rounded-md text-blue-600 hover:border-white hover:bg-transparent hover:text-white"
				>
					Return page principal
				</Link>
			</div>
		</div>
	);
};
