"use client";
import { Input, Link, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { COCKTAIL_RECOMMENDATIONS } from "@/Data/cocktailRecommendations";

function Recommendations() {
	const [input, setInput] = useState("");
	const [recs, setRecs] = useState([] as string[]);

	const getRecommendations = () => {
		setRecs(COCKTAIL_RECOMMENDATIONS[input]);
	};

	return (
		<div>
			<div className="action-header">
				<Link href={"/"} className="back-link">
					<IconButton
						sx={{
							color: "rgb(240, 84, 84)",
							borderColor: "rgb(240, 84, 84)",
						}}
					>
						<BiArrowBack size={"1.75em"} />
					</IconButton>
				</Link>
			</div>
			<h1>
				Give us a cocktail that you like, and we will recommend one that
				you might enjoy !
			</h1>
			<div style={{ margin: "20px", padding: "20px" }}>
				<Input
					sx={{
						background: "rgba(0,0,0,0.2)",
						marginRight: "20px",
						color: "white",
						paddingX: "7px",
						paddingY: "2px",
					}}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					variant="outlined"
					color="primary"
					onClick={getRecommendations}
				>
					Surprise Me
				</Button>
			</div>
			<div>
				{recs.length > 0 &&
					recs.map((cocktail, index) => {
						return <div key={index}>{cocktail}</div>;
					})}
			</div>
		</div>
	);
}

export default Recommendations;
