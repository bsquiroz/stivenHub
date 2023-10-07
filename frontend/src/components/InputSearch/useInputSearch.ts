import { useState } from "react";
import { getProfilesGithub } from "../../services/getProfilesGithub";
import { useAppDispatch } from "../../store/useStore";
import { setProfilesGithub, setLoader } from "../../store/profileGithubSlice";
import { validationSearch } from "../../helpers/validationSearch";
import { toast } from "react-toastify";

export const useInputSearch = () => {
	const [InputSearch, setInputSearch] = useState("");
	const dispatch = useAppDispatch();

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = validationSearch(InputSearch);

		if (response) {
			return toast.warning(response);
		}

		dispatch(setLoader(true));

		const profiles = await getProfilesGithub(InputSearch);

		if (profiles) {
			dispatch(
				setProfilesGithub(
					profiles.items.length >= 10
						? profiles.items.slice(0, 10)
						: profiles.items
				)
			);
		}

		dispatch(setLoader(false));
	};

	return {
		handleSearch,
		InputSearch,
		setInputSearch,
	};
};
