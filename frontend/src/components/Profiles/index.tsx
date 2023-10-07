import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/useStore";
import { ChartFollowers } from "../ChartFollowers";

export const Profiles = () => {
	const { profilesGithub } = useAppSelector((state) => state.profileGithub);

	return profilesGithub.length ? (
		<>
			<ul className="grid grid-cols-fluid gap-5 p-5 rounded-lg bg-slate-300 dark:bg-slate-800">
				{profilesGithub.map((profile, i) => (
					<li key={profile.id}>
						<Link
							className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 cursor-pointer dark:hover:bg-slate-600 text-center"
							to={`/profile/${profile.id}`}
						>
							<p className="font-bold text-base">{i + 1}. </p>
							<div>
								<p className="font-bold">{profile.login}</p>
								<p>Id: {profile.id}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
			<ChartFollowers />
		</>
	) : (
		<h2 className="text-lg font-bold text-center">
			Results without searches
		</h2>
	);
};
