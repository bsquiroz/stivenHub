import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GitHubUsersInterface } from "../interfaces/githubUser";

const darkThemeStorageValue = localStorage.getItem("darkTheme");

export interface profileGithubState {
	profilesGithub: GitHubUsersInterface[];
	loader: boolean;
	themeDark: boolean;
}

const initialState: profileGithubState = {
	profilesGithub: [],
	loader: false,
	themeDark: darkThemeStorageValue
		? JSON.parse(darkThemeStorageValue)
		: false,
};

export const profileGithubSlice = createSlice({
	name: "profileGithub",
	initialState,
	reducers: {
		setProfilesGithub: (
			state,
			action: PayloadAction<GitHubUsersInterface[]>
		) => {
			state.profilesGithub = action.payload;
		},
		setLoader: (state, action: PayloadAction<boolean>) => {
			state.loader = action.payload;
		},
		setThemeDark: (state, action: PayloadAction<boolean>) => {
			state.themeDark = action.payload;
			localStorage.setItem("darkTheme", JSON.stringify(action.payload));
		},
	},
});

export const { setProfilesGithub, setLoader, setThemeDark } =
	profileGithubSlice.actions;

export default profileGithubSlice.reducer;
