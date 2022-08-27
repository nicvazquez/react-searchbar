import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/searchbar/SearchBar";

function App() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		void fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data));
	}, []);

	const results = users.filter((user) =>
		user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	);

	return (
		<div>
			<SearchBar onChange={(e) => setSearch(e.target.value)} />
			{
				<ul>
					{results.length === 0 ? (
						<p>There are no users to display</p>
					) : (
						results.map((user) => <li key={user.id}>{user.name}</li>)
					)}
				</ul>
			}
		</div>
	);
}

export default App;
