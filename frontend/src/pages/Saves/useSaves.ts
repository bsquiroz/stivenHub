import { useEffect, useState } from "react";
import { deleteProfile, getProfiles } from "../../services/restApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ProfileInterface {
	idProfile: number;
	nameProfile: string;
	imageProfile: string;
}

export const useSaves = () => {
	const [profiles, setProfiles] = useState<ProfileInterface[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		getProfiles().then((data) => setProfiles(data));
	}, []);

	const handleDeleteProfile = async (id: number, name: string) => {
		await deleteProfile(id);
		toast.info(`profile ${name} remove to saves`);
		navigate("/");
	};

	return {
		profiles,
		handleDeleteProfile,
	};
};
