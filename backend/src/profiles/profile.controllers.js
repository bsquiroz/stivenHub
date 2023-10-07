import {
	createProfile,
	findAllProfiles,
	removeProfile,
} from "./profile.services.js";

export async function getProfiles(req, res) {
	const profiles = await findAllProfiles();
	res.status(200).json(profiles);
}

export async function postProfile(req, res) {
	const { idProfile, nameProfile, imageProfile } = req.body;

	const newProfile = await createProfile({
		idProfile: idProfile.toString(),
		nameProfile,
		imageProfile,
	});

	if (!newProfile) {
		res.status(409).json({
			message: "duplicate id, the resource already exist",
		});
	}

	res.status(201).json(newProfile);
}

export async function deleteProfile(req, res) {
	const { id } = req.params;

	const profileDelete = await removeProfile(id);

	res.status(200).json({
		mmessage: `Delete profile with id ${profileDelete.idProfile}`,
	});
}
