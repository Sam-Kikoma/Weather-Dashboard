import { useState } from "react";
import Forecast from "./components/Forecast";
import Highlight from "./components/Highlight";
import More from "./components/More";
import Search from "./components/Search";
import Temperature from "./components/Temperature";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<div className="w-full h-screen p-8 grid grid-cols-4 grid-rows-[80px_1fr_1fr] gap-4">
			<div className="col-span-4 flex justify-center">
				<Search setSearchValue={setSearchValue} />
			</div>
			<div className="col-span-1 border-black border-2">
				<Temperature />
			</div>
			<div className="col-span-3 border-black border-2">
				<Highlight />
			</div>
			<div className="col-span-2 border-black border-2">
				<More />
			</div>
			<div className="col-span-2 border-black border-2">
				<Forecast />
			</div>
		</div>
	);
};

export default App;
