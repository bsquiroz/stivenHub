import {
	getProfiles,
	postProfile,
	deleteProfile,
} from "./profile.controllers.js";

import { Router } from "express";

export const routerProfile = Router();

routerProfile.get("/", getProfiles);
routerProfile.post("/", postProfile);
routerProfile.delete("/:id", deleteProfile);
