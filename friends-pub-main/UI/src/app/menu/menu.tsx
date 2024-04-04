"use client";

import React, { useState, useEffect } from "react";
import MenuSection from "../../Components/MenuSection";
import {
	sortCocktails,
	availableCocktails,
	getIngredientsList,
} from "../../functions/functions";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Cocktail, Cocktails } from "@/Data/cocktails";
import { Ingredient, MyIngredient } from "@/Data/ingredients";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
// import CocktailModal from "@/Components/CocktailModal";
import SearchBar from "@/Components/SearchBar";
import { useRouter } from "next/navigation";

export default function Menu({
	Cocktails,
	Ingredients,
	MyIngredients,
}: {
	Cocktails: Cocktail[];
	Ingredients: Ingredient[];
	MyIngredients: MyIngredient[];
}) {
	const [createCocktailModal, setCreateCocktailModal] = useState(false);
	const [secondary, setSecondary] = useState(false);
	const [searchCocktails, setSearchCocktails] = useState(Cocktails);

	const sections = ["vodka", "gin", "rum", "tequila", "whiskey"];

	useEffect(() => {
		setSearchCocktails(Cocktails);
	}, [Cocktails]);

	const handleChange = (e: any) => {
		const results = Cocktails.filter((cocktail: Cocktail) => {
			const ing = getIngredientsList(cocktail.ingredients, Ingredients);

			if (e.target.value === "") return cocktail;
			if (
				cocktail.name
					.replace(/\s/g, "")
					.toLowerCase()
					.includes(
						e.target.value.replace(/\s/g, "").toLowerCase()
					) ||
				ing.find((ingredient: any) =>
					ingredient.name
						.replace(/\s/g, "")
						.toLowerCase()
						.includes(
							e.target.value.replace(/\s/g, "").toLowerCase()
						)
				)
			) {
				return cocktail;
			}
		});

		setSearchCocktails(results);
	};

	return (
		<div style={{ width: "100%" }}>
			<div className="sticky-header">
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
					{/* <>
						<CocktailModal
							setModalOpen={setCreateCocktailModal}
							open={createCocktailModal}
							ingredientsList={Ingredients}
							refreshData={refreshData}
						/>
					</> */}
				</div>
				<>
					<h1 className="header-title">Menu</h1>
				</>
				<div className="action-header" style={{ marginLeft: "1em" }}>
					<SearchBar setSearchValue={handleChange} />
					<FormControlLabel
						style={{ marginLeft: "0.5em" }}
						control={
							<Checkbox
								checked={secondary}
								onChange={(event: any) =>
									setSecondary(event.target.checked)
								}
								sx={{ color: "white" }}
							/>
						}
						label="Ingredients"
					/>
				</div>
			</div>
			<div>
				{sections.map((section) => {
					const drinks = sortCocktails(
						section,
						searchCocktails,
						Ingredients
					);

					const availableDrinks = availableCocktails(
						MyIngredients,
						drinks,
						Ingredients
					);

					if (drinks?.length === 0) return <></>;

					return (
						<div key={section} style={{ marginLeft: "0.5em" }}>
							<MenuSection
								section={section}
								drinks={drinks}
								myCocktails={availableDrinks}
								ingredientList={Ingredients}
								secondary={secondary}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
