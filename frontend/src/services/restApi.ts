const BASE_URL = "http://localhost:3001/api/v1/profiles";

interface ProfileInterface {
	idProfile: number;
	nameProfile: string;
	imageProfile: string;
}

export async function getProfiles() {
	try {
		const data = await fetch(BASE_URL);
		const profiles = await data.json();
		return profiles;
	} catch (error) {
		console.log(error);
	}
}

export async function postProfile(profile: ProfileInterface) {
	try {
		const data = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(profile),
		});
		const newProfile = await data.json();
		return newProfile;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteProfile(idProfile: number) {
	try {
		const data = await fetch(`${BASE_URL}/${idProfile}`, {
			method: "DELETE",
		});

		const deleteProfile = await data.json();
		return deleteProfile;
	} catch (error) {
		console.log(error);
	}
}
