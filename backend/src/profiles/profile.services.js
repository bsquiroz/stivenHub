import { Profiles } from "../models/Profile.js";

export async function findAllProfiles() {
	const profiles = await Profiles.findAll();
	return profiles;
}

export async function createProfile(profile) {
	const findProfile = await Profiles.findOne({
		where: { idProfile: profile.idProfile },
	});

	if (findProfile) return;

	const newProfile = await Profiles.create(profile);
	return newProfile;
}

export async function removeProfile(idProfile) {
	const profile = await Profiles.findOne({
		where: { idProfile },
	});

	await profile.destroy();

	return profile;
}
