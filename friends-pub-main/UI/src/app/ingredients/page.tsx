import React from "react";
import Ingredients from "./ingredients";

async function getData() {
	const ingredientsData = await fetch(
		process.env.API_URL_NEXT + "ingredients/api",
		{
			cache: "no-store",
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));

	const myIngredientsData = await fetch(
		process.env.API_URL_NEXT + "ingredients/api/myIngredients",
		{
			cache: "no-store",
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));

	return {
		ingredients: ingredientsData,
		myIngredients: myIngredientsData,
	};
}

export default async function IngredientsPage() {
	const data = await getData();

	return (
		<Ingredients
			Ingredients={data.ingredients}
			MyIngredients={data.myIngredients}
		/>
	);
}
