import React, { useState, useEffect } from "react";
import { Cocktail } from "../Data/cocktails";
import Link from "next/link";
import { Chip, List, ListItem, ListItemText } from "@mui/material";
import { getIngredientsList } from "@/functions/functions";
import { colors } from "@/Constants/colors";
import styles from "../styles/Components/menuSection.module.scss";

export default function MenuSection({
	section,
	drinks,
	myCocktails,
	ingredientList,
	secondary,
}: any) {
	const [drinkToDisplay, setDrinkToDisplay] = useState(drinks);

	useEffect(() => {
		setDrinkToDisplay(drinks);
	}, [drinks]);

	return (
		<div>
			<h2 className={styles.sectionTitle}>{section}</h2>
			<div>
				<List>
					{drinkToDisplay.map((drink: Cocktail) => {
						let available = "unavailable";
						let color = "grey";
						let ingredients = "";
						if (
							myCocktails.find(
								(myDrink: Cocktail) => myDrink.id === drink.id
							)
						) {
							available = "available";
							color = "rgba(55,171,49,1)";
						}
						const ingredientObj = getIngredientsList(
							drink.ingredients,
							ingredientList
						);

						ingredientObj.forEach((ingredient: any) => {
							ingredients += ingredient.name + ", ";
						});

						ingredients = ingredients.slice(0, -2);

						return (
							<ListItem
								key={drink.id}
								sx={{
									display: "flex",
									justifyContent: "space-between",
									height: "2rem",
									marginBottom: "1rem",
								}}
							>
								<>
									<Link
										className="drink-link"
										href={{
											pathname: `/menu/${drink.name}`,
											query: {
												drinkId: drink.id,
											},
										}}
									>
										<ListItemText
											primary={drink.name}
											secondary={
												secondary ? ingredients : null
											}
											secondaryTypographyProps={{
												color: colors.secondary.dark,
												style: {
													marginLeft: "1em",
													paddingTop: "0.25em",
													marginBottom: "0.25em",
													fontSize: "0.75em",
												},
											}}
										/>
									</Link>
								</>
								<Chip
									label={available}
									variant="outlined"
									sx={{
										color: "white",
										backgroundColor: color,
									}}
								/>
							</ListItem>
						);
					})}
				</List>
			</div>
		</div>
	);
}
