import React from "react";
import { BiSearch } from "react-icons/bi";
import { IconButton } from "@mui/material";
import styles from "../styles/Components/SearchBar.module.scss";

export default function SearchBar({ setSearchValue }: any) {
	return (
		<div className={styles.search}>
			<IconButton
				sx={{
					color: "rgb(34, 40, 49)",
					display: "grid",
					placeItems: "center",
					marginLeft: "0.2em",
				}}
			>
				<BiSearch size={"1.15em"} />
			</IconButton>
			<input
				type="text"
				placeholder="Search"
				className={styles.searchInput}
				onChange={setSearchValue}
			/>
		</div>
	);
}
