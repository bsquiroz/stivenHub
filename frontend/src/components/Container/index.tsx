interface Props {
	children: JSX.Element[] | JSX.Element;
}

export const Container = ({ children }: Props) => {
	return (
		<div className="bg-slate-200 text-blue-950 dark:bg-slate-900 dark:text-white">
			<main className="flex flex-col gap-5 max-w-5xl m-auto min-h-screen p-5">
				{children}
			</main>
		</div>
	);
};
