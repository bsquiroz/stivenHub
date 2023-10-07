import {
	GitHubUserInterface,
	GitHubUsersInterface,
} from "../interfaces/githubUser";

const token = import.meta.env.VITE_TOKEN;

interface responseInterface {
	total_count: number;
	incomplete_results: boolean;
	items: GitHubUsersInterface[];
}

export async function getProfilesGithub(
	profile: string
): Promise<responseInterface | undefined> {
	try {
		const BASE_URL = `https://api.github.com/search/users?q=${profile}`;
		const data = await fetch(BASE_URL);
		return await data.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getProfileGithub(
	idProfile: string
): Promise<GitHubUserInterface | undefined> {
	try {
		const BASE_URL = `https://api.github.com/user/${idProfile}`;
		const data = await fetch(BASE_URL, {
			method: "GET",
			headers: {
				Authorization: `token ${token}`,
			},
		});

		return await data.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getProfilesFollowers(url: string) {
	try {
		const res = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `token ${token}`,
			},
		});
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}
