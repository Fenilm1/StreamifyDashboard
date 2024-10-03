import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
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

const userGrowthData = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "Total Users",
			data: [
				1000000, 1050000, 1100000, 1150000, 1200000, 1250000, 1300000,
				1350000, 1400000, 1450000, 1500000, 1550000,
			],
			borderColor: "#3b82f6",
			backgroundColor: "rgba(59, 130, 246, 0.5)",
		},
		{
			label: "Active Users",
			data: [
				800000, 820000, 850000, 900000, 950000, 1000000, 1050000,
				1100000, 1150000, 1200000, 1250000, 1300000,
			],
			borderColor: "#22c55e",
			backgroundColor: "rgba(34, 197, 94, 0.5)",
		},
	],
};

export default function LazyLineChart() {
	return <Line options={chartOptions} data={userGrowthData} />;
}
