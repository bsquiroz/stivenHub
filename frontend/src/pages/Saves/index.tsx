import { Title } from "../../components";
import { useSaves } from "./useSaves";

export const Saves = () => {
	const { profiles, handleDeleteProfile } = useSaves();

	return (
		<>
			<Title title="Profiles Saves 💾" />
			<ul className="grid grid-cols-fluid gap-5 bg-slate-300 dark:bg-slate-800 p-5">
				{profiles.length ? (
					profiles.map((profile) => (
						<li
							className="flex gap-5 items-center bg-slate-100 dark:bg-slate-600 rounded-md p-2 justify-center"
							key={profile.idProfile}
						>
							<picture className="w-12 bg-slate-300">
								<img
									src={profile.imageProfile}
									alt={`image ${profile.nameProfile}`}
								/>
							</picture>
							<div>
								<p>{profile.nameProfile}</p>
								<p>{profile.idProfile}</p>
								<button
									onClick={() =>
										handleDeleteProfile(
											profile.idProfile,
											profile.nameProfile
										)
									}
									type="button"
									className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
									Delete
								</button>
							</div>
						</li>
					))
				) : (
					<h2 className="text-2xl font-bold text-center">
						there are not nothing profile save, you save 💥
					</h2>
				)}
			</ul>
		</>
	);
};
