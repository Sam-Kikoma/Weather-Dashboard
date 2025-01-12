import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearchValue }: { setSearchValue: (value: string) => void }) => {
	const [search, setSearch] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchValue(search);
	};

	return (
		<form action="" className="w-auto relative" onSubmit={handleSubmit}>
			<div className="relative">
				<input
					type="text"
					placeholder="Enter location"
					value={search}
					onChange={handleChange}
					className="w-full border border-gray-300 rounded-2xl px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
					<FaSearch />
				</button>
			</div>
		</form>
	);
};

export default Search;
