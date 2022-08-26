import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/searchbar/SearchBar";

function App() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	const fetchData = async () => {
		await fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data));
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<SearchBar onChange={(e) => setSearch(e.target.value)} />
			{users
				?.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
				.map((user) => (
					<p key={user.id}>{user.name}</p>
				))}
		</div>
	);
}

export default App;
