import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/searchbar/SearchBar";

function App() {
	const [users, setUsers] = useState([]);

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
			<SearchBar />
			{users?.map((user) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
}

export default App;
