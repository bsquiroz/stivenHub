import { useChartFollowers } from "./useChartFollowers";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export const ChartFollowers = () => {
	const { numbersFollows } = useChartFollowers();

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "number of followers",
			},
		},
	};

	const labels = numbersFollows.map((_, i) => `User ${i + 1}`);

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Amount followers",
				data: numbersFollows,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return <Line options={options} data={data} />;
};
