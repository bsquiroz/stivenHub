import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfileGithub } from "../../services/getProfilesGithub";
import { GitHubUserInterface } from "../../interfaces/githubUser";
import { useAppDispatch } from "../../store/useStore";
import { setLoader } from "../../store/profileGithubSlice";
import { postProfile } from "../../services/restApi";
import { toast } from "react-toastify";

export const useProfileInfo = () => {
	const { id } = useParams();
	const [profile, setProfile] = useState<GitHubUserInterface>();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			dispatch(setLoader(true));
			getProfileGithub(id).then((result) => {
				if (result) {
					setProfile(result);
				}
			});
			dispatch(setLoader(false));
		}
	}, [id]);

	const handleProfileSave = async () => {
		if (profile) {
			const newProfile = {
				idProfile: profile.id,
				nameProfile: profile.login,
				imageProfile: profile.avatar_url,
			};

			const data = await postProfile(newProfile);

			if (data?.message) {
				toast.warning(
					`profile ${profile.login} alredy exists in saves`
				);
				return;
			}

			navigate("/saves");
			toast.success(`profile ${profile.login} add to saves`);
		}
	};

	return {
		profile,
		handleProfileSave,
	};
};
