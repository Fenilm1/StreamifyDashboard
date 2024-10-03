"use client";

import React, { useState, useMemo, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { ArrowUpDown } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./components/ui/table";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

import MetricCard from "./components/MetricCard";
import TopArtist from "./components/TopArtist";

// Lazy load chart components
const LineChart = lazy(() => import("./components/LineChart"));
const PieChart = lazy(() => import("./components/PieChart"));
const BarChart = lazy(() => import("./components/BarChart"));

const streamData = [
	{
		id: 1,
		songName: "Shake It Off",
		artist: "Taylor Swift",
		dateStreamed: "2023-05-01",
		streamCount: 1500000,
		userId: "user123",
	},
	{
		id: 2,
		songName: "Blinding Lights",
		artist: "The Weeknd",
		dateStreamed: "2023-05-02",
		streamCount: 1200000,
		userId: "user456",
	},
	{
		id: 3,
		songName: "Shape of You",
		artist: "Ed Sheeran",
		dateStreamed: "2023-05-03",
		streamCount: 1000000,
		userId: "user789",
	},
	{
		id: 4,
		songName: "Bad Guy",
		artist: "Billie Eilish",
		dateStreamed: "2023-05-04",
		streamCount: 900000,
		userId: "user101",
	},
	{
		id: 5,
		songName: "Uptown Funk",
		artist: "Mark Ronson ft. Bruno Mars",
		dateStreamed: "2023-05-05",
		streamCount: 800000,
		userId: "user202",
	},
];

export default function Dashboard() {
	const [sortColumn, setSortColumn] = useState<
		keyof (typeof streamData)[0] | ""
	>("");
	const [sortOrder, setSortOrder] = useState("asc");
	const [filterArtist, setFilterArtist] = useState("");
	const [filterSong, setFilterSong] = useState("");

	const handleSort = (column: keyof (typeof streamData)[0] | "") => {
		if (sortColumn === column) {
			setSortOrder(sortOrder === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortOrder("asc");
		}
	};

	const sortedAndFilteredData = useMemo(() => {
		return streamData
			.filter(
				(item) =>
					item.artist
						.toLowerCase()
						.includes(filterArtist.toLowerCase()) &&
					item.songName
						.toLowerCase()
						.includes(filterSong.toLowerCase())
			)
			.sort((a, b) => {
				if (sortColumn) {
					if (
						a[sortColumn as keyof typeof a] <
						b[sortColumn as keyof typeof b]
					)
						return sortOrder === "asc" ? -1 : 1;
					if (
						a[sortColumn as keyof typeof a] >
						b[sortColumn as keyof typeof b]
					)
						return sortOrder === "asc" ? 1 : -1;
				}
				return 0;
			});
	}, [filterArtist, filterSong, sortColumn, sortOrder]);

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 p-6">
			<h1 className="text-3xl font-semibold mb-5">Streamify Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				<MetricCard
					title="Total Users"
					value="1,234,567"
					change="+2.5% from last month"
				/>
				<MetricCard
					title="Active Users"
					value="987,654"
					change="+1.8% from last month"
				/>
				<MetricCard
					title="Total Streams"
					value="5,678,901"
					change="+5.2% from last month"
				/>
				<MetricCard
					title="Revenue"
					value="$12,345,678"
					change="+3.7% from last month"
				/>

				<Card className="bg-gray-800 border-gray-700 col-span-full xl:col-span-2">
					<CardHeader>
						<CardTitle className="text-gray-400">
							User Growth
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-[300px]">
							<Suspense fallback={<div>Loading chart...</div>}>
								<LineChart />
							</Suspense>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-gray-800 border-gray-700 col-span-full md:col-span-1 xl:col-span-1">
					<CardHeader>
						<CardTitle className="text-gray-400">
							Revenue Distribution
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-[300px]">
							<Suspense fallback={<div>Loading chart...</div>}>
								<PieChart />
							</Suspense>
						</div>
					</CardContent>
				</Card>

				<TopArtist />

				<Card className="bg-gray-800 border-gray-700 col-span-full">
					<CardHeader>
						<CardTitle className="text-gray-400">
							Top 5 Streamed Songs
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-[300px]">
							<Suspense fallback={<div>Loading chart...</div>}>
								<BarChart />
							</Suspense>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-gray-800 border-gray-700 col-span-full">
					<CardHeader>
						<CardTitle className="text-gray-400">
							Recent Streams
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex gap-4 mb-4">
							<Input
								placeholder="Filter by Artist"
								value={filterArtist}
								onChange={(e) =>
									setFilterArtist(e.target.value)
								}
								className="bg-gray-700 text-gray-100"
							/>
							<Input
								placeholder="Filter by Song"
								value={filterSong}
								onChange={(e) => setFilterSong(e.target.value)}
								className="bg-gray-700 text-gray-100"
							/>
						</div>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="text-gray-400">
										<Button
											variant="ghost"
											onClick={() =>
												handleSort("songName")
											}
											className="text-gray-400"
										>
											Song Name{" "}
											<ArrowUpDown className="ml-2 h-4 w-4" />
										</Button>
									</TableHead>
									<TableHead className="text-gray-400">
										<Button
											variant="ghost"
											onClick={() => handleSort("artist")}
											className="text-gray-400"
										>
											Artist{" "}
											<ArrowUpDown className="ml-2 h-4 w-4" />
										</Button>
									</TableHead>
									<TableHead className="text-gray-400">
										<Button
											variant="ghost"
											onClick={() =>
												handleSort("dateStreamed")
											}
											className="text-gray-400"
										>
											Date Streamed{" "}
											<ArrowUpDown className="ml-2 h-4 w-4" />
										</Button>
									</TableHead>
									<TableHead className="text-gray-400">
										<Button
											variant="ghost"
											onClick={() =>
												handleSort("streamCount")
											}
											className="text-gray-400"
										>
											Stream Count{" "}
											<ArrowUpDown className="ml-2 h-4 w-4" />
										</Button>
									</TableHead>
									<TableHead className="text-gray-400">
										User ID
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{sortedAndFilteredData.map((item) => (
									<TableRow key={item.id}>
										<TableCell className="font-medium">
											{item.songName}
										</TableCell>
										<TableCell>{item.artist}</TableCell>
										<TableCell>
											{item.dateStreamed}
										</TableCell>
										<TableCell>
											{item.streamCount.toLocaleString()}
										</TableCell>
										<TableCell>{item.userId}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
