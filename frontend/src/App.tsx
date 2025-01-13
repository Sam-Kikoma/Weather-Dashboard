import { useState } from "react";
import Forecast from "./components/Forecast";
import Highlight from "./components/Highlight";
import Search from "./components/Search";
import Temperature from "./components/Temperature";

const App = () => {
	const key = import.meta.env.VITE_OPENWEATHER_APIKEY;
	const [searchValue, setSearchValue] = useState("");
	const [forecast, setForecast] = useState([]);
	const [response, setResponse] = useState([]);
	const fetchData = async (value: string): Promise<void> => {
		try {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=imperial`);
			if (!res.ok) throw new Error("Failed to fetch data");
			const parsedRes = await res.json();
			setResponse(parsedRes);
			const futureForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${key}`);
			const moreParsedRes = await futureForecast.json();
			setForecast(moreParsedRes);
		} catch (error) {
			console.error("Error fetching data:", error);
			setResponse([]);
		}
	};
	console.log(forecast);

	return (
		<div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col gap-6 font-sans text-gray-100">
			<div className="w-full flex justify-center mb-4">
				<Search
					setSearchValue={(value) => {
						setSearchValue(value);
						fetchData(value);
					}}
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-gray-800 shadow-lg rounded-xl p-6">
					{response.length === 0 ? (
						<h1 className="text-gray-400 text-center">Enter a location</h1>
					) : (
						<Temperature data={response} />
					)}
				</div>

				<div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-800 shadow-lg rounded-xl p-6">
					{response.length === 0 ? (
						<h1 className="text-gray-400 text-center">Enter a location</h1>
					) : (
						<Highlight data={response} />
					)}
				</div>
				<div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-gray-800 shadow-lg rounded-xl p-6">
					<Forecast data={forecast} />
				</div>
			</div>
		</div>
	);
};

export default App;
