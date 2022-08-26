import React from "react";
import styles from "./searchbar.module.css";

export const SearchBar = () => {
	return (
		<input
			className={styles.searchbar}
			placeholder="Search for an user"
			type="text"
		/>
	);
};
