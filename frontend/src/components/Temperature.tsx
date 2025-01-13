import React, { useState } from "react";

const Temperature = ({ data }) => {
	const [temp, setTemp] = useState("C");

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTemp(e.target.value);
	};

	const date: Date = new Date();
	const dayNum = date.getDay();
	const day: number = date.getDate();
	const month: number = date.getMonth() + 1;
	const year: number = date.getFullYear();
	const dayNames: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	// Corrected conversion formula
	const tempMetric = (value: number): number => {
		const converted: number = (value - 32) * (5 / 9);
		return parseFloat(converted.toFixed(1));
	};

	return (
		<>
			<div className="flex justify-between mb-4">
				<h1 className="text-4xl">{data.name}</h1>
				<select
					value={temp}
					onChange={handleChange}
					className="appearance-none bg-slate-100 py-2 px-4 rounded-md text-black"
				>
					<option value="C">C</option>
					<option value="F">F</option>
				</select>
			</div>
			<p className="text-xl mb-4">{dayNames[dayNum]}</p>
			<p className="text-xl mb-4">{`${day}-${month}-${year}`}</p>
			<div className="flex">
				<img
					src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					alt="Weather icon"
					className="w-24"
				/>
				<p>{data.weather[0].description}</p>
			</div>
			<p>Temperature : {temp === "F" ? `${data.main.temp}°F` : `${tempMetric(data.main.temp)}°C`}</p>
		</>
	);
};

export default Temperature;
