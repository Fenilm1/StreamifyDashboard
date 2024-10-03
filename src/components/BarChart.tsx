import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	indexAxis: "y" as const,
	plugins: {
		legend: {
			position: "top" as const,
			labels: {
				color: "#9ca3af",
			},
		},
	},
	scales: {
		x: {
			grid: {
				color: "#374151",
			},
			ticks: {
				color: "#9ca3af",
			},
		},
		y: {
			grid: {
				color: "#374151",
			},
			ticks: {
				color: "#9ca3af",
			},
		},
	},
};

const topSongsData = {
	labels: ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"],
	datasets: [
		{
			label: "Streams",
			data: [1000000, 950000, 900000, 850000, 800000],
			backgroundColor: "#3b82f6",
		},
	],
};

export default function LazyBarChart() {
	return <Bar options={chartOptions} data={topSongsData} />;
}
