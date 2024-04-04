import React from "react";
import Menu from "@/app/menu/menu";
import { Cocktail } from "@/Data/cocktails";
import { Ingredient, MyIngredient } from "@/Data/ingredients";

async function getData() {
	const cocktailsData = await fetch(process.env.API_URL_NEXT + "menu/api", {
		cache: "no-store",
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

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
		cocktails: cocktailsData,
		ingredients: ingredientsData,
		myIngredients: myIngredientsData,
	};
}

export default async function MenuPage() {
	const data = await getData();

	return (
		<Menu
			Cocktails={data.cocktails as any as Cocktail[]}
			Ingredients={data.ingredients as any as Ingredient[]}
			MyIngredients={data.myIngredients as any as MyIngredient[]}
		/>
	);
}
