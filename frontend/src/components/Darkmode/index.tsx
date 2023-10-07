import { useDarkMode } from "./useDarkMode";

export const Darkmode = () => {
	const { handleDarkmode, themeDark } = useDarkMode();

	return (
		<li
			className="text-blue-500 hover:text-blue-800 cursor-pointer"
			onClick={handleDarkmode}
		>
			{themeDark ? (
				<i className="bx bxs-sun"></i>
			) : (
				<i className="bx bx-moon"></i>
			)}
		</li>
	);
};
