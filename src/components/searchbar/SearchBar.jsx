import React from "react";
import styles from "./searchbar.module.css";

export const SearchBar = ({ onChange }) => {
	return (
		<input
			className={styles.searchbar}
			placeholder="Search for an user"
			type="search"
			onChange={onChange}
		/>
	);
};
