interface Props {
	title: string;
}

export const Title = ({ title }: Props) => {
	return <h2 className="text-3xl font-bold text-center">{title}</h2>;
};
