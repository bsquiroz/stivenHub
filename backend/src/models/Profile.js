import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Profiles = db.define("profiles", {
	idProfile: {
		type: DataTypes.STRING,
		primaryKey: true,
		unique: true,
	},
	nameProfile: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		allowNull: false,
	},
	imageProfile: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
