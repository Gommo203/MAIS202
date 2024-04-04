export interface Ingredient {
	id?: number | string;
	name: string;
	type: IngredientType;
}

export interface MyIngredient {
	id?: number | string;
	ingredientId: number | string;
	part?: number;
}

export type IngredientType =
	| "spirit"
	| "juice"
	| "sweetener"
	| "herb"
	| "bitters"
	| "water"
	| "Garnish";

export interface Ingredients extends Array<Ingredient> {}
export interface MyIngredients extends Array<MyIngredient> {}

export const MYINGREDIENTS: MyIngredients = [
	{
		ingredientId: 1,
	},
	{
		ingredientId: 2,
	},
	{
		ingredientId: 3,
	},
	{
		ingredientId: 4,
	},
	{
		ingredientId: 5,
	},
	{
		ingredientId: 6,
	},
	{
		ingredientId: 7,
	},
	{
		ingredientId: 8,
	},
	{
		ingredientId: 9,
	},
	{
		ingredientId: 11,
	},
	{
		ingredientId: 12,
	},
	{
		ingredientId: 13,
	},
	{
		ingredientId: 14,
	},
	{
		ingredientId: 15,
	},
];

export const INGREDIENTS: Ingredients = [
	{
		id: 1,
		name: "White rum",
		type: "spirit",
	},
	{
		id: 2,
		name: "Lime",
		type: "juice",
	},
	{
		id: 3,
		name: "Sugar",
		type: "sweetener",
	},
	{
		id: 4,
		name: "Mint",
		type: "herb",
	},
	{
		id: 5,
		name: "Bourbon",
		type: "spirit",
	},
	{
		id: 6,
		name: "Angostura bitters",
		type: "bitters",
	},
	{
		id: 7,
		name: "Water",
		type: "water",
	},
	{
		id: 8,
		name: "Orange peel",
		type: "Garnish",
	},
	{
		id: 9,
		name: "Sweet Vermouth",
		type: "spirit",
	},
	{
		id: 10,
		name: "Maraschino cherry",
		type: "Garnish",
	},
	{
		id: 11,
		name: "Tequila",
		type: "spirit",
	},
	{
		id: 12,
		name: "Triple sec",
		type: "spirit",
	},
	{
		id: 13,
		name: "Vodka",
		type: "spirit",
	},
	{
		id: 14,
		name: "Gin",
		type: "spirit",
	},
	{
		id: 15,
		name: "Orange Juice",
		type: "juice",
	},
	{
		id: 16,
		name: "Tonic Water",
		type: "water",
	},
	{
		id: 17,
		name: "Coke",
		type: "water",
	},
];

// export const MY_INGREDIENTS: myIngredients[] = [
// 	1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15,
// ];
