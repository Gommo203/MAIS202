import { Cocktail } from "../Data/cocktails";
import { Ingredients, Ingredient, MyIngredient } from "../Data/ingredients";

export function sortCocktails(
	spirit: string,
	cocktailsList: Cocktail[],
	ingredientsList: Ingredient[]
): Cocktail[] {
	let sortedCocktails: Cocktail[] = [];

	for (let i = 0; i < cocktailsList?.length; i++) {
		const ingredients = (cocktailsList[i] as any as Cocktail).ingredients;

		for (let j = 0; j < ingredients?.length; j++) {
			const ingredient = ingredientsList.find((ingredient: any) => {
				const idToFind = ingredients[j];
				return ingredient.id + "" === idToFind + "";
			});

			if (
				(ingredient as any as Ingredient)?.name
					.replace(/\s/g, "")
					.toLocaleLowerCase()
					.includes(spirit)
			) {
				sortedCocktails.push(cocktailsList[i]);
			}
		}
	}

	return sortedCocktails;
}

export function availableCocktails(
	myIngredients: MyIngredient[],
	cocktailsList: Cocktail[],
	ingredientsList: Ingredient[]
): Cocktail[] {
	let availableCocktails: Cocktail[] = [];

	for (let i = 0; i < cocktailsList?.length; i++) {
		const ingredients = (cocktailsList[i] as any as Cocktail).ingredients;
		let isAvailable = true;
		for (let j = 0; j < ingredients?.length; j++) {
			const ingredient = ingredientsList.find((ingredient: any) => {
				const idToFind = ingredients[j];
				return ingredient.id + "" === idToFind + "";
			});

			if (
				!myIngredients.some((myIngredient: MyIngredient) => {
					return (
						myIngredient.ingredientId + "" ===
						(ingredient as any as Ingredient).id + ""
					);
				})
			) {
				isAvailable = false;
			}
		}
		if (isAvailable) availableCocktails.push(cocktailsList[i]);
	}

	return availableCocktails;
}

export function getIngredientsList(
	myIngredients: number[],
	ingredients: Ingredients
) {
	let ingredientsList: Ingredients = [];

	for (let i = 0; i < myIngredients?.length; i++) {
		const ingredient = ingredients.find((ingredient: any) => {
			const idToFind = myIngredients[i];
			return ingredient.id + "" === idToFind + "";
		});

		ingredientsList.push(ingredient as any as Ingredient);
	}

	return ingredientsList;
}
