import { Title } from "../../components";
import { parseDate } from "../../helpers/parseDate";
import { useProfileInfo } from "./useProfileInfo";

export const ProfileInfo = () => {
	const { profile, handleProfileSave } = useProfileInfo();

	return (
		profile && (
			<div className="flex flex-col gap-5 grow bg-slate-100  dark:bg-slate-800 p-5 rounded-lg">
				<Title title={`Profile info  ${profile.login} 🙌🏽`} />
				<div className="flex justify-between">
					<p>Followers ➡ {profile.followers}</p>
					<p>Following ➡ {profile.following}</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
					<picture className="rounded-full overflow-hidden max-w-[300px] bg-slate-500">
						<img
							src={profile.avatar_url}
							alt={`image ${profile.login}`}
						/>
					</picture>
					<div className="flex flex-col gap-5  self-center">
						<h2 className="font-medium">
							BIO ➡{" "}
							{profile.bio
								? profile.bio
								: "there is nothing, a person of few words"}
						</h2>
						<p>created at ➡ {parseDate(profile.created_at)}</p>
						<button
							onClick={handleProfileSave}
							type="button"
							className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>
							Save
						</button>
					</div>
				</div>
			</div>
		)
	);
};
