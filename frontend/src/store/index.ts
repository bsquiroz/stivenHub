import { configureStore } from "@reduxjs/toolkit";
import profileGithubReducer from "./profileGithubSlice";

export const store = configureStore({
	reducer: {
		profileGithub: profileGithubReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
