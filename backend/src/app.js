import express from "express";
import { db } from "./utils/db.js";
import cors from "cors";
import { routerProfile } from "./profiles/profile.routes.js";

db.authenticate()
	.then(() => console.log("Database Authenticated!!!"))
	.catch((err) => console.log(err));

db.sync()
	.then(() => console.log("Database Synced!!!"))
	.catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/v1/profiles", routerProfile);

app.listen(PORT, () => {
	console.log(`server on http://localhost:${PORT}`);
});
