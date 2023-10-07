import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { setThemeDark } from "../../store/profileGithubSlice";
import { useEffect } from "react";

export const useDarkMode = () => {
	const { themeDark } = useAppSelector((state) => state.profileGithub);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (themeDark) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, []);

	const handleDarkmode = () => {
		dispatch(setThemeDark(!themeDark));
		document.body.classList.toggle("dark");
	};

	return {
		handleDarkmode,
		themeDark,
	};
};
