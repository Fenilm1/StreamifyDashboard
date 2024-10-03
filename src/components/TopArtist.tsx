import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const TopArtist = React.memo(() => (
	<Card className="bg-gray-800 border-gray-700 col-span-full md:col-span-1 xl:col-span-1">
		<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle className="text-sm font-medium text-gray-400">
				Top Artist
			</CardTitle>
			<ArrowUpRight className="h-4 w-4 text-green-500" />
		</CardHeader>
		<CardContent>
			<div className="text-2xl font-bold mb-2">Taylor Swift</div>
			<div className="text-xs text-gray-500">5.2M streams this month</div>
			<div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
				<div
					className="h-full bg-blue-500 rounded-full"
					style={{ width: "75%" }}
				></div>
			</div>

			<hr className="my-4 border-gray-600" />
			<div className="text-sm text-gray-400">
				Named in Time Magazine's "100 Most Influential People" list in
				2023.
			</div>
			<div className="mt-2 text-sm text-gray-400">
				Currently on her "Eras Tour," which sold out in record time.
			</div>
			<div className="mt-2 text-sm text-gray-500">
				Surpassed 100 million monthly listeners on Spotify.
			</div>
			<div className="mt-2 text-sm text-gray-500">
				Her song "Anti-Hero" became the fastest song to reach 1 billion
				streams.
			</div>
			<div className="mt-2 text-sm text-gray-500">
				Her latest album, "Midnights," has topped the charts for over 12
				weeks.
			</div>
		</CardContent>
	</Card>
));

export default TopArtist;
