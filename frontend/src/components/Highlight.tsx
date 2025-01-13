const Highlight = ({ data }) => {
	const timeConvert = (value: number) => {
		return new Date(value).toLocaleTimeString("en-GB");
	};
	return (
		<>
			<h1 className="mb-4">Today's Highlight</h1>
			<div className="grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-4 h-[80%]">
				<div className="col-span-1 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Wind Status</h2>
					<p>{data.wind.speed} m/s</p>
				</div>
				<div className="col-span-1 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Humidity</h2>
					<p>{data.main.humidity}%</p>
				</div>
				<div className="col-span-2 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Sunsrise</h2>
					<p>{timeConvert(data.sys.sunrise)} A.M(UTC)</p>
				</div>
				<div className="col-span-1 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Clouds</h2>
					<p>{data.clouds.all} %</p>
				</div>
				<div className="col-span-1 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Visibility</h2>
					<p>{data.visibility / 1000} km</p>
				</div>
				<div className="col-span-2 row-span-1 bg-gray-700 rounded-lg shadow-xl p-2">
					<h2 className="md:mb-4">Sunset</h2>
					<p>{timeConvert(data.sys.sunset)} P.M(UTC)</p>
				</div>
			</div>
		</>
	);
};

export default Highlight;
