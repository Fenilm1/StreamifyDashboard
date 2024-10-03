import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MoreHorizontal } from "lucide-react";

const MetricCard = React.memo(
	({
		title,
		value,
		change,
	}: {
		title: string;
		value: string;
		change: string;
	}) => (
		<Card className="bg-gray-800 border-gray-700">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium text-gray-400">
					{title}
				</CardTitle>
				<MoreHorizontal className="h-4 w-4 text-gray-500" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-gray-500">{change}</p>
			</CardContent>
		</Card>
	)
);

export default MetricCard;
