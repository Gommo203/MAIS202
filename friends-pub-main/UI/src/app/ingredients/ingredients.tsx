"use client";

import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Ingredients, Ingredient, MyIngredient } from "@/Data/ingredients";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
// import AddIngredientModal from "@/Components/AddIngredientModal";
import styles from "../../styles/pages/ingredients/index.module.scss";
import IngredientSection from "@/Components/IngredientSection";
import SearchBar from "@/Components/SearchBar";
import FilterButton from "@/Components/FilterButton";

export default function Ingredients({
	Ingredients,
	MyIngredients,
}: {
	Ingredients: Ingredient[];
	MyIngredients: MyIngredient[];
}) {
	const [myIngredients, setMyIngredients] = useState(MyIngredients);
	const [createIngredientModal, setCreateIngredientModal] = useState(false);
	const [ingredientList, setIngredientList] = useState(Ingredients);

	useEffect(() => {
		setIngredientList(Ingredients);
	}, [Ingredients]);

	const types = [
		"spirit",
		"juice",
		"sweetener",
		"herb",
		"bitters",
		"mixer",
		"Garnish",
	];

	async function updateMyIngredients(e: any, ingredientId: number | string) {
		if (e.target.checked) {
			const res = await fetch("ingredients/api/myIngredients", {
				method: "POST",
				body: JSON.stringify({
					ingredientId: ingredientId,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();

			setMyIngredients([
				...myIngredients,
				{ id: data.id, ingredientId: ingredientId },
			]);
		} else {
			setMyIngredients(
				myIngredients.filter((myIngredient: MyIngredient) => {
					return myIngredient.ingredientId + "" !== ingredientId + "";
				})
			);

			const foundIngredient = myIngredients.find(
				(myIngredient: MyIngredient) => {
					return myIngredient.ingredientId + "" === ingredientId + "";
				}
			);

			const res = await fetch(
				`ingredients/api/myIngredients/${foundIngredient?.id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await res.json();
		}
	}

	const handleChange = (e: any) => {
		const results = Ingredients.filter((ingredient: Ingredient) => {
			if (e.target.value === "") return ingredient;
			if (
				ingredient.name
					.replace(/\s/g, "")
					.toLowerCase()
					.includes(e.target.value.replace(/\s/g, "").toLowerCase())
			) {
				return ingredient;
			}
		});
		setIngredientList(results);
	};

	return (
		<div style={{ width: "100%" }}>
			<div className="sticky-header">
				<div className="action-header">
					<Link href="/" className="back-link">
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
						<AddIngredientModal
							setModalOpen={setCreateIngredientModal}
							open={createIngredientModal}
							refreshData={refreshData}
						/>
					</> */}
				</div>
				<>
					<h1 className="header-title">Ingredients</h1>
				</>
				<div
					className="action-header"
					style={{ marginLeft: "1em", marginRight: "1em" }}
				>
					<SearchBar setSearchValue={handleChange} />
					{/* <FilterButton /> */}
				</div>
			</div>
			<div style={{ marginTop: "2rem" }}>
				{types.map((type, index) => {
					const sectionIngredients = ingredientList?.filter(
						(ingredient: Ingredient) => {
							if (ingredient.type === type) {
								return ingredient;
							}
						}
					);

					if (sectionIngredients?.length === 0) return null;

					return (
						<div key={index}>
							<IngredientSection
								section={type}
								ingredients={sectionIngredients}
								myIngredients={myIngredients}
								updateMyIngredients={updateMyIngredients}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
