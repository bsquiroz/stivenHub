import { useState, useEffect } from "react";
import { getProfilesFollowers } from "../../services/getProfilesGithub";
import { useAppSelector } from "../../store/useStore";

export const useChartFollowers = () => {
	const { profilesGithub } = useAppSelector((state) => state.profileGithub);
	const [numbersFollows, setNumbersFollows] = useState<number[]>([]);

	const promiseFollowers = profilesGithub.map((profile) =>
		getProfilesFollowers(profile.followers_url)
	);

	useEffect(() => {
		Promise.all(promiseFollowers).then((response) => {
			setNumbersFollows(response.map((followers) => followers.length));
		});
	}, [profilesGithub]);

	return {
		numbersFollows,
	};
};
