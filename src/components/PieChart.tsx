import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: "bottom" as const,
			labels: {
				color: "#9ca3af",
			},
		},
	},
};

const revenueDistributionData = {
	labels: ["Subscriptions", "Advertisements"],
	datasets: [
		{
			data: [8500000, 3845678],
			backgroundColor: ["#3b82f6", "#22c55e"],
		},
	],
};

export default function LazyPieChart() {
	return <Pie options={chartOptions} data={revenueDistributionData} />;
}
